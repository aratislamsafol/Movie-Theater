import  { useContext, useEffect, useRef, useState } from "react";
import { showSuccess, showConfirm } from "../utils/SweetAlert";
import Header from "../components/Header/Header";
import { AuthContext } from "../provider/AuthProvider";
import ProfileTab from "../components/ProfileTab/ProfileTab";
import { useLoaderData } from "react-router-dom";

const ProfilePage = () => {
    const {user} = useContext(AuthContext);
    const {movies, tvSeries} = useLoaderData();
    const [ combineData, setCombineData ] = useState([]);
    
    useEffect(()=>{
        const combine = [...movies.movies, ...tvSeries.tv_series];
        setCombineData(combine);
    },[movies, tvSeries])
    
    const [isEditing, setIsEditing] = useState(false);
    const [profileImg, setProfileImg] = useState(user.photoURL);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [newEmail, setNewEmail] = useState("");
    const [emails, setEmails] = useState([
        { address: "alexarawles@gmail.com", addedAt: "1 month ago" },
    ]);

    const fileInputRef = useRef(null);

    const handleEditToggle = async () => {
        if (isEditing) {
            const confirmed = await showConfirm("Do you want to save changes?", "Save", "Cancel");
            if (confirmed) {
                setIsEditing(false);
                showSuccess("Profile updated successfully!");
            }
        } else {
            setIsEditing(true);
        }
    };
    console.log(user)
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImg(imageUrl);
        }
    };

    const handleAddEmail = () => {
        if (newEmail.trim()) {
            setEmails([...emails, { address: newEmail.trim(), addedAt: "Just now" }]);
            setNewEmail("");
            setShowEmailModal(false);
            showSuccess("Email added successfully!");
        }
    };

    return (
        <div className="bg-gradient-to-br from-black via-zinc-900 to-stone-900 min-h-screen text-white">
            <Header />

            <div className="flex items-center justify-center min-h-[calc(100vh-80px)] sm:px-2 md:px-4">
                <div className="w-full max-w-5xl p-5 md:p-8 bg-stone-800 text-white rounded-xl shadow-lg">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-gray-300">
                        <div className="flex items-center gap-4">
                            <div className="relative group">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-16 h-16 rounded-full object-cover cursor-pointer ring-2 ring-gray-300"
                                    onClick={() => isEditing && fileInputRef.current.click()}
                                />
                                {isEditing && (
                                    <div className="absolute bottom-0 left-0 w-full text-center bg-black/60 text-white text-xs py-1 rounded-b opacity-80">
                                        Change
                                    </div>
                                )}
                                <input
                                    type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleImageChange} />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">{user.displayName}</h2>
                                <p className="text-gray-200 text-sm">{user.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleEditToggle}
                            className={`${isEditing ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
                                } text-white px-4 py-2 rounded`}
                        >
                            {isEditing ? "Save" : "Edit"}
                        </button>
                    </div>

                    {/* Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {[{ label: "Full Name", value: "Alex" }, { label: "Nick Name", value: "Lexi" }].map(
                            (field, idx) => (
                                <div key={idx}>
                                    <label className="block text-sm font-medium">{field.label}</label>
                                    <input
                                        type="text"
                                        defaultValue={field.value}
                                        readOnly={!isEditing}
                                        className={`mt-1 w-full px-4 py-2 border rounded bg-black text-white placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700
                      ${!isEditing ? "opacity-70 cursor-not-allowed" : ""}
                    `}
                                    />
                                </div>
                            )
                        )}

                        {[
                            { label: "Gender", options: ["Male", "Female", "Other"], value: "Female" },
                            { label: "Country", options: ["USA", "Bangladesh", "India"], value: "USA" },
                            { label: "Language", options: ["English", "Bengali", "Hindi"], value: "English" },
                            { label: "Time Zone", options: ["GMT-6", "GMT+6", "GMT"], value: "GMT-6" },
                        ].map((field, idx) => (
                            <div key={idx}>
                                <label className="block text-sm font-medium">{field.label}</label>
                                <select
                                    disabled={!isEditing}
                                    defaultValue={field.value}
                                    className={`mt-1 w-full px-4 py-2 border rounded bg-black text-white
                    focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700
                    ${!isEditing ? "opacity-70 cursor-not-allowed" : ""}
                  `}
                                >
                                    {field.options.map((opt, i) => (
                                        <option key={i}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                    
                    {/* create Tab */}
                    <ProfileTab allData = {combineData} />
                    {/* Email Section */}
                    <div className="mt-8">
                        <h3 className="font-medium mb-2 text-white">My email Address</h3>
                        <div className="space-y-3">
                            {emails.map((email, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 bg-amber-600 rounded"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="font-medium">{email.address}</p>
                                            <p className="text-sm text-gray-100">{email.addedAt}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            disabled={!isEditing}
                            onClick={() => setShowEmailModal(true)}
                            className={`mt-4 px-4 py-2 text-red-700 border border-red-600 rounded transition hover:text-white hover:bg-red-600 ${isEditing ? "hover:bg-blue-50" : "cursor-not-allowed opacity-50"
                                }`}
                        >
                            + Add Email Address
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showEmailModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-cyan-700 text-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Add New Email</h2>
                        <input
                            type="email"
                            placeholder="example@mail.com"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            className="w-full p-3 border rounded mb-4 bg-black text-white placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setShowEmailModal(false)}
                                className="px-4 py-2 bg-red-600 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddEmail}
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
