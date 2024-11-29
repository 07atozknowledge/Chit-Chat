import React, { useState } from 'react';
import EmojiPicker from 'react-emoji-picker';

const myTextArea = () => {
    const [text, setText] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const handleEmojiClick = (emojiObject) => {
        setText(text + emojiObject.emoji);
        setShowPicker(false);
    };

    return (
        <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setShowPicker(!showPicker)}>Add Emoji</button>
            {showPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        </div>
    );
};

export default myTextArea;