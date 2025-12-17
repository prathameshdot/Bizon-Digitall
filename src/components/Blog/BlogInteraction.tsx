"use client";

import { useState, useEffect } from "react";

interface BlogInteractionProps {
  slug: string;
  variant?: "compact" | "full";
}

export default function BlogInteraction({ 
  slug, 
  variant = "compact"
}: BlogInteractionProps) {
  const [hasLiked, setHasLiked] = useState(false);
  const [hasShared, setHasShared] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  useEffect(() => {
    // Check if user has already liked/shared this blog
    const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
    const sharedBlogs = JSON.parse(localStorage.getItem('sharedBlogs') || '[]');
    setHasLiked(likedBlogs.includes(slug));
    setHasShared(sharedBlogs.includes(slug));
  }, [slug]);

  const handleLike = async () => {
    if (hasLiked || isLiking) return;

    setIsLiking(true);
    try {
      const response = await fetch('/api/blogs/interact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, type: 'like' }),
      });

      if (response.ok) {
        setHasLiked(true);
        
        // Save to localStorage
        const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
        likedBlogs.push(slug);
        localStorage.setItem('likedBlogs', JSON.stringify(likedBlogs));
      }
    } catch (error) {
      console.error('Failed to like blog:', error);
    } finally {
      setIsLiking(false);
    }
  };

  const handleShare = async () => {
    if (isSharing || hasShared) return;

    const url = `${window.location.origin}/blog-details/${slug}`;
    
    // Try native share API first
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this blog post',
          url: url,
        });
        
        // Update share count
        setIsSharing(true);
        const response = await fetch('/api/blogs/interact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug, type: 'share' }),
        });

        if (response.ok) {
          setHasShared(true);
          
          // Save to localStorage
          const sharedBlogs = JSON.parse(localStorage.getItem('sharedBlogs') || '[]');
          sharedBlogs.push(slug);
          localStorage.setItem('sharedBlogs', JSON.stringify(sharedBlogs));
        }
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Share failed:', error);
        }
      } finally {
        setIsSharing(false);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        
        // Update share count
        setIsSharing(true);
        const response = await fetch('/api/blogs/interact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug, type: 'share' }),
        });

        if (response.ok) {
          setHasShared(true);
          
          // Save to localStorage
          const sharedBlogs = JSON.parse(localStorage.getItem('sharedBlogs') || '[]');
          sharedBlogs.push(slug);
          localStorage.setItem('sharedBlogs', JSON.stringify(sharedBlogs));
        }
      } catch (error) {
        console.error('Failed to copy link:', error);
      } finally {
        setIsSharing(false);
      }
    }
  };

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        <button
          onClick={handleLike}
          disabled={hasLiked || isLiking}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
            hasLiked 
              ? 'bg-red-500 text-white cursor-not-allowed' 
              : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 hover:scale-105'
          }`}
          title={hasLiked ? 'Already liked' : 'Like this post'}
        >
          <svg 
            className="w-5 h-5"
            fill={hasLiked ? 'currentColor' : 'none'}
            stroke="currentColor" 
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="font-medium">{hasLiked ? 'Liked' : 'Like'}</span>
        </button>

        <button
          onClick={handleShare}
          disabled={hasShared || isSharing}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
            hasShared 
              ? 'bg-blue-500 text-white cursor-not-allowed' 
              : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-105'
          }`}
          title={hasShared ? 'Already shared' : 'Share this post'}
        >
          <svg 
            className="w-5 h-5"
            fill="none" 
            stroke="currentColor" 
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span className="font-medium">{hasShared ? 'Shared' : 'Share'}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="border-y border-gray-200 py-6 my-8">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={handleLike}
          disabled={hasLiked || isLiking}
          className={`group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-md ${
            hasLiked
              ? 'bg-red-500 text-white cursor-not-allowed'
              : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-red-500 hover:text-red-600'
          }`}
          title={hasLiked ? 'You already liked this' : 'Like this blog'}
        >
          <svg
            className="w-7 h-7 transition-transform group-hover:scale-110"
            fill={hasLiked ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span>{hasLiked ? '❤️ Liked!' : 'Like'}</span>
        </button>

        <button
          onClick={handleShare}
          disabled={hasShared || isSharing}
          className={`group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-md ${
            hasShared
              ? 'bg-blue-500 text-white cursor-not-allowed'
              : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600'
          }`}
          title={hasShared ? 'You already shared this' : 'Share this blog'}
        >
          <svg
            className="w-7 h-7 transition-transform group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span>{hasShared ? '🔗 Shared!' : 'Share'}</span>
        </button>
      </div>
      <p className="text-center text-sm text-gray-500 mt-4">
        {hasLiked || hasShared
          ? "Thank you for your engagement!"
          : "Show your support by liking or sharing this blog"}
      </p>
    </div>
  );
}
