import { useState } from "react";

function MySpace(){
    const [happinessLevel, setHappinessLevel] = useState(50); // Default happiness level
    const [masterpieces, setMasterpieces] = useState([]); // Array to store user's masterpieces

    // Function to add a new masterpiece
    const addMasterpiece = () => {
        const newMasterpiece = { id: Date.now(), title: `Masterpiece ${masterpieces.length + 1}` };
        setMasterpieces([...masterpieces, newMasterpiece]);
    };

    // Function to handle change in happiness level
    const handleHappinessChange = (event) => {
        setHappinessLevel(parseInt(event.target.value));
    };

    return (
        <div className="container mx-auto px-8 py-12">
            <h2 className="text-4xl font-bold mb-8">My Profile</h2>

            {/* User greeting */}
            <h3 className="text-2xl font-bold mb-4">Hello, Username!</h3>

            {/* Happiness bar */}
            <p>Happiness Percentage</p>
            <div className="flex items-center mb-8">
             
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={happinessLevel}
                    onChange={handleHappinessChange}
                    className="w-1/2 bg-gray-300 rounded-full mr-4"
                />
                <span className="text-lg">{happinessLevel}%</span>
            </div>

            {/* My Masterpieces section */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">My Masterpieces</h3>
                <div className="grid grid-cols-3 gap-4">
                    {masterpieces.map(masterpiece => (
                        <div key={masterpiece.id} className="border border-gray-200 p-4">
                            <h4 className="text-xl font-bold mb-2">{masterpiece.title}</h4>
                            {/* You can add further details of the masterpiece */}
                        </div>
                    ))}
                </div>
            </div>

            {/* Button to add new masterpiece */}
            <button
                onClick={addMasterpiece}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add New Masterpiece
            </button>

            {/* Progress tab */}
            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Progress</h3>
                {/* Include progress details here */}
            </div>
        </div>
    );

}

export default MySpace;