import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * Video oynatma modalı. youtubeId varsa YouTube embed, yoksa mp4 <video> oynatır.
 * @param {object|null} video  { title, youtubeId, mp4 } — null ise modal kapalı
 * @param {() => void} onClose
 */
const VideoModal = ({ video, onClose }) => (
  <AnimatePresence>
    {video && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
        onClick={onClose}
      >
        <button
          className="absolute top-6 right-6 text-white hover:text-luxera-gold transition-colors z-10"
          onClick={onClose}
          aria-label="Kapat"
        >
          <X size={32} />
        </button>

        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden border border-luxera-gold/20 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {video.youtubeId ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video className="w-full h-full" src={video.mp4} controls autoPlay playsInline>
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          )}
        </motion.div>

        {video.title && (
          <div className="absolute bottom-6 left-6 text-white pointer-events-none">
            <h3 className="font-serif text-xl text-luxera-gold">{video.title}</h3>
          </div>
        )}
      </motion.div>
    )}
  </AnimatePresence>
);

export default VideoModal;
