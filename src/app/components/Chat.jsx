import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSocketConnection } from "../utils/socket";
import { useRef } from "react";
import { useConnectionsQuery } from "../apis/matchingApi";


export default function Chat() {
    const { data: connections, isLoading: requestLoading } =
        useConnectionsQuery();
    const { targetUserId } = useParams();
    const user = useSelector((state) => state.account.user)
    const userId = user?._id;
    const targetUser = connections?.find((user) => user?._id === targetUserId);

    const socketRef = useRef(null);
    const [messages, setMessages] = useState([]);
    console.log(userId + " and " + targetUserId)

    useEffect(() => {
        if (!userId || !targetUserId) return;
        socketRef.current = createSocketConnection();

        socketRef.current.on("messageReceived", ({ firstName, text }) => {
            setMessages(prev => [
                ...prev,
                {
                    id: prev.length + 1,
                    sender: firstName,
                    avatar: targetUser.photoUrl,
                    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                    text,
                    side: "start",
                    status: "Delivered",
                }
            ]);
            console.log(`${firstName}'s message: ${text}`);
        });

        socketRef.current.emit("joinChat", { firstName: user.first_name, userId, targetUserId });

        return () => {
            socketRef.current.disconnect();
        }
    }, [userId, targetUserId])
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessage = {
            id: messages.length + 1,
            sender: "You",
            avatar: user.photoUrl,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            text: input,
            side: "end",
            status: "Sent",
        };
        setMessages(prev => [...prev, newMessage]);

        socketRef.current.emit("sendMessage", { firstName: user.first_name, userId, targetUserId, text: newMessage.text })
        setInput("");
    };








    return (
        <Paper

            elevation={9}
            sx={{
                width: 450,
                height: 650,
                display: "flex",
                flexDirection: "column",
                p: 2,
                borderRadius: 3,
                backgroundImage: 'url("/images/loveChat.jpg")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                mb: 4
            }}
        >
            {/* Messages area */}
            <Box
                sx={{
                    flexGrow: 1,
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    mb: 2,
                }}
            >
                {messages.map((msg) => (
                    <Box
                        key={msg.id}
                        display="flex"
                        alignItems="flex-start"
                        gap={1}
                        justifyContent={msg.side === "start" ? "flex-start" : "flex-end"}
                    >
                        {msg.side === "start" && <Avatar src={msg.avatar} sx={{ width: 40, height: 40 }} />}
                        <Box>
                            <Box display="flex" alignItems="center" gap={1} justifyContent={msg.side === "start" ? "flex-start" : "flex-end"}>
                                <Typography variant="subtitle2">{msg.sender}</Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {msg.time}
                                </Typography>
                            </Box>
                            <Paper
                                elevation={1}
                                sx={{
                                    p: 1,
                                    borderRadius: 2,
                                    bgcolor: msg.side === "start" ? "primary.light" : "secondary.light",
                                    maxWidth: 250,
                                    mt: 0.5,
                                    ml: msg.side === "start" ? 0 : "auto",
                                }}
                            >
                                <Typography>{msg.text}</Typography>
                            </Paper>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                mt={0.5}
                                textAlign={msg.side === "start" ? "left" : "right"}
                            >
                                {msg.status}
                            </Typography>
                        </Box>
                        {msg.side === "end" && <Avatar src={msg.avatar} sx={{ width: 40, height: 40 }} />}
                    </Box>
                ))}
            </Box>

            {/* Input area */}
            <Box display="flex" gap={1}>
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <IconButton color="primary" onClick={handleSend}>
                    <SendIcon />
                </IconButton>
            </Box>
        </Paper>

    );
}
