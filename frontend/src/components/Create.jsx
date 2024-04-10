import React, { useState } from 'react';

const Create = () => {
    const [difficulty, setDifficulty] = useState('Medium');
    const [filterBy, setFilterBy] = useState('Date');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [content, setContent] = useState([]);

    const handleAddContent = () => {
        const newContent = {
            id: Date.now(),
            title: title,
            description: description,
            imageUrl: imageUrl
        };
        setContent([...content, newContent]);
        setTitle('');
        setDescription('');
        setImageUrl('');
    };

    return (
        <div className="container mx-auto px-8 py-12">
            <h2 className="text-4xl font-bold mb-8">Create Web Page</h2>
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Difficulty Level</h3>
                <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="border border-gray-400 rounded px-4 py-2 mb-4"
                >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Filter By</h3>
                <select
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                    className="border border-gray-400 rounded px-4 py-2 mb-4"
                >
                    <option value="Date">Date</option>
                    <option value="Popularity">Popularity</option>
                    <option value="Category">Category</option>
                </select>
            </div>
            <div>
                {content.map(item => (
                    <div key={item.id} className="mb-8">
                        <img src={item.imageUrl} alt={item.title} className="mb-4" />
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Add Content</h3>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="border border-gray-400 rounded px-4 py-2 mb-4 w-full"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="border border-gray-400 rounded px-4 py-2 mb-4 w-full"
                />
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Image URL"
                    className="border border-gray-400 rounded px-4 py-2 mb-4 w-full"
                />
                <button
                    onClick={handleAddContent}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add Content
                </button>
            </div>
            
        </div>
    );
}

export default Create;
