"use client";

import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { Card } from "./ui/card";
const CreatePost = () => {
  const { user } = useUser();
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);

  const handleSubmit = async () => {};

  return <Card>CreatePost</Card>;
};

export default CreatePost;
