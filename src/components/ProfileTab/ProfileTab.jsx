import { useEffect, useMemo, useState } from "react";

const ProfileTab = ({ allData }) => {
  const [tabs, setTabs] = useState(() => [
    {
      name: "Playlist",
      category: [
        { movies: [101, 102, 103, 105] },
        { videos: [101, 102, 103, 104, 105, 106] },
        { episodes: [3, 4] },
      ],
    },
    {
      name: "WatchList",
      category: [
        { movies: [103, 105] },
        { videos: [101, 106] },
        { episodes: [4] },
      ],
    },
    {
      name: "Membership",
      transactions: [
        { date: "May 9, 2025", level: "Premium Plan", total: "$180.00", status: "Paid" },
        { date: "April 19, 2025", level: "Basic Plan", total: "$10.00", status: "Paid" },
        { date: "April 8, 2025", level: "Premium Plan", total: "$180.00", status: "Paid" },
        { date: "March 30, 2025", level: "Standard Plan", total: "$79.00", status: "Paid" },
        { date: "March 21, 2025", level: "Basic Plan", total: "$10.00", status: "Paid" },
      ],
    },
  ]);


  const [activeTab, setActiveTab] = useState(() => tabs[0]?.name || "Playlist");
  const [activeMediaTab, setActiveMediaTab] = useState("movies"); 
  const [filterMovies, setFilterMovies] = useState([]);
  const [filterVideos, setFilterVideos] = useState([]);
  const [filterEpisodes, setFilterEpisodes] = useState([]);


  const activeTabData = useMemo(() => {
    return tabs.find((tab) => tab.name === activeTab);
  }, [activeTab, tabs]);


  useEffect(() => {
    if (allData?.length && activeTabData?.category) {
      // Filter Movies
      const movieIds =
        activeTabData?.category?.find((cat) => cat.movies)?.movies || [];
      const filteredMovies = allData.filter((data) =>
        movieIds.includes(data.id)
      );
      setFilterMovies(filteredMovies);

      // Filter Videos
      const videoIds =
        activeTabData?.category?.find((cat) => cat.videos)?.videos || [];
      const filteredVideos = allData.filter((data) =>
        videoIds.includes(data.id)
      );
      setFilterVideos(filteredVideos);

      // Filter Episodes
      const episodeIds =
        activeTabData?.category?.find((cat) => cat.episodes)?.episodes || [];
      const filteredEpisodes = allData.filter((data) =>
        episodeIds.includes(data.id)
      );
      setFilterEpisodes(filteredEpisodes);
    } else {
      // Clear all filtered data if no category or allData is available
      setFilterMovies([]);
      setFilterVideos([]);
      setFilterEpisodes([]);
    }
    // Reset the active nested media tab to 'movies' whenever the parent tab changes
    setActiveMediaTab("movies");
  }, [allData, activeTabData, activeTab]); // Dependencies ensure re-run on relevant changes

  // Memoized array for nested media tab buttons
  const mediaTabs = useMemo(() => [
    { name: "Movies", type: "movies" },
    { name: "Videos", type: "videos" },
    { name: "Episodes", type: "episodes" },
  ], []);

  // Function to handle click on a media item (movie, video, episode) for navigation
  const handleItemClick = (itemId) => {
    window.location.href = `/item/${itemId}`;
  };

  // Function to handle deletion of a media item
  const handleDeleteItem = (itemId, mediaType, currentTabName) => {
    setTabs((prevTabs) => {
      // Create a deep copy to ensure immutability
      const newTabs = prevTabs.map((tab) => {
        if (tab.name === currentTabName) {
          return {
            ...tab,
            category: tab.category.map((cat) => {
              if (cat[mediaType]) {
                return {
                  [mediaType]: cat[mediaType].filter((id) => id !== itemId),
                };
              }
              return cat;
            }),
          };
        }
        return tab;
      });
      return newTabs;
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6">
      {/* Tab Buttons (Parent Tabs: Playlist, WatchList, Membership) */}
      <div className="flex md:flex-col gap-2 w-full md:w-1/4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`w-full p-2 rounded text-sm font-medium transition duration-200
             ${
               activeTab === tab.name
                 ? "bg-red-600 text-white" // Active tab style
                 : "bg-amber-600 text-black hover:bg-red-500 hover:text-white" // Inactive tab style
             }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content Area */}
      <div className="bg-stone-700 p-5 rounded-md flex-1 text-white shadow-md border border-stone-600">

        {activeTab === "Membership" && (
          <div className="overflow-x-auto"> 
            <table className="min-w-full divide-y divide-stone-600">
              {/* Table Header */}
              <thead className="bg-stone-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-300 uppercase tracking-wider">
                    Level
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-300 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-300 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody className="bg-stone-700 divide-y divide-stone-600">
                {/* Map through transactions to create table rows */}
                {activeTabData.transactions && activeTabData.transactions.map((transaction, index) => (
                  <tr key={index}> 
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {transaction.level}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {transaction.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {/* Dynamic styling for "Status" badge */}
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${transaction.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                      `}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {/* Message if no membership data is available */}
                {!activeTabData.transactions?.length && (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 whitespace-nowrap text-sm text-center text-stone-400">
                      No membership data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}


        {activeTab !== "Membership" && activeTabData?.category && (
          <div className="space-y-4">
            {/* Nested Media Tab Buttons (Movies, Videos, Episodes) */}
            <div className="flex gap-2 p-1 bg-stone-800 rounded-md">
              {mediaTabs.map((mTab) => (
                <button
                  key={mTab.type}
                  onClick={() => setActiveMediaTab(mTab.type)}
                  className={`flex-1 p-2 rounded text-sm font-medium transition duration-200
                    ${
                      activeMediaTab === mTab.type
                        ? "bg-red-600 text-white" // Active nested tab style
                        : "bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-white" 
                    }`}
                >
                  {mTab.name} ({ 
                    mTab.type === 'movies' ? filterMovies.length :
                    mTab.type === 'videos' ? filterVideos.length :
                    filterEpisodes.length
                  })
                </button>
              ))}
            </div>

            {/* Nested Media Tab Content Display */}
            <div className="mt-4">
              {activeMediaTab === "movies" && (
                <>
                  {filterMovies?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filterMovies.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-md overflow-hidden bg-stone-800 group"
                        >
                          {/* Item content area - clickable for navigation */}
                          <div
                            onClick={() => handleItemClick(item.id)}
                            className="cursor-pointer hover:scale-105 transition-transform duration-200"
                          >
                            <img
                              src={
                                item.cover_image ||
                                "https://via.placeholder.com/200x300?text=No+Image"
                              }
                              className="w-full h-auto object-cover"
                              alt={item.title || `Movie ${item.id}`}
                            />
                            {item.title && (
                              <p className="p-2 text-sm truncate">{item.title}</p> 
                            )}
                          </div>
                          {/* Delete Button */}
                          <div className="p-2 bg-stone-900 text-right">
                            <button
                              onClick={() => handleDeleteItem(item.id, "movies", activeTab)}
                              className="px-3 py-1 bg-red-700 text-white text-xs font-semibold rounded hover:bg-red-800 transition-colors duration-200"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-stone-400">No movies in this category.</p>
                  )}
                </>
              )}

              {activeMediaTab === "videos" && (
                <>
                  {filterVideos?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filterVideos.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-md overflow-hidden bg-stone-800 group"
                        >
                          {/* Item content area - clickable for navigation */}
                          <div
                            onClick={() => handleItemClick(item.id)}
                            className="cursor-pointer hover:scale-105 transition-transform duration-200"
                          >
                            <img
                              src={
                                item.cover_image ||
                                "https://via.placeholder.com/200x300?text=No+Image"
                              }
                              className="w-full h-auto object-cover"
                              alt={item.title || `Video ${item.id}`}
                            />
                            {item.title && (
                              <p className="p-2 text-sm truncate">{item.title}</p>
                            )}
                          </div>
                          {/* Delete Button */}
                          <div className="p-2 bg-stone-900 text-right">
                            <button
                              onClick={() => handleDeleteItem(item.id, "videos", activeTab)}
                              className="px-3 py-1 bg-red-700 text-white text-xs font-semibold rounded hover:bg-red-800 transition-colors duration-200"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-stone-400">No videos in this category.</p>
                  )}
                </>
              )}

              {activeMediaTab === "episodes" && (
                <>
                  {filterEpisodes?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filterEpisodes.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-md overflow-hidden bg-stone-800 group"
                        >
                          {/* Item content area - clickable for navigation */}
                          <div
                            onClick={() => handleItemClick(item.id)}
                            className="cursor-pointer hover:scale-105 transition-transform duration-200"
                          >
                            <img
                              src={
                                item.cover_image ||
                                "https://via.placeholder.com/200x300?text=No+Image"
                              }
                              className="w-full h-auto object-cover"
                              alt={item.title || `Episode ${item.id}`}
                            />
                            {item.title && (
                              <p className="p-2 text-sm truncate">{item.title}</p>
                            )}
                          </div>
                          {/* Delete Button */}
                          <div className="p-2 bg-stone-900 text-right">
                            <button
                              onClick={() => handleDeleteItem(item.id, "episodes", activeTab)}
                              className="px-3 py-1 bg-red-700 text-white text-xs font-semibold rounded hover:bg-red-800 transition-colors duration-200"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-stone-400">No episodes in this category.</p>
                  )}
                </>
              )}


              {filterMovies?.length === 0 &&
                filterVideos?.length === 0 &&
                filterEpisodes?.length === 0 && (
                  <p className="text-center text-stone-400">
                    No items found in this tab's categories.
                  </p>
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileTab;