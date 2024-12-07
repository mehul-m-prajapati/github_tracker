const ContributionGrid = () => {
  // Contribution data with varying intensity values
  const months = [
    {
      name: "Jan",
      contributions: [
        0, 1, 2, 3, 1, 0, 2, 3, 0, 1, 2, 3, 1, 0, 2, 0, 1, 3, 2, 1, 0, 1, 3, 0,
        2, 1, 3, 0, 1, 2, 3,
      ],
    },
    {
      name: "Feb",
      contributions: [
        1, 2, 0, 3, 0, 1, 2, 3, 0, 1, 2, 0, 1, 2, 3, 1, 0, 3, 2, 1, 0, 3, 1, 0,
        2, 1, 3, 2,
      ],
    },
    {
      name: "Mar",
      contributions: [
        0, 2, 3, 1, 0, 2, 3, 0, 1, 2, 3, 1, 0, 2, 0, 1, 3, 2, 1, 0, 1, 3, 0, 2,
        1, 3, 0, 1, 2, 3, 1,
      ],
    },
    {
      name: "Apr",
      contributions: [
        0, 1, 3, 0, 2, 1, 3, 0, 2, 1, 3, 0, 1, 2, 3, 1, 0, 2, 3, 0, 1, 2, 3, 0,
        2, 1, 3, 1, 0, 2,
      ],
    },
    {
      name: "May",
      contributions: [
        3, 1, 0, 2, 1, 3, 0, 2, 3, 1, 0, 3, 2, 1, 3, 0, 2, 3, 0, 1, 2, 3, 1, 0,
        3, 2, 1, 0, 3, 1, 2,
      ],
    },
  ];

  // Map contribution count to intensity classes
  const getIntensityClass = (count) => {
    if (count === 0) return "bg-gray-200"; // No contributions
    if (count === 1) return "bg-gray-400"; // Low contributions
    if (count === 2) return "bg-gray-600"; // Medium contributions
    if (count >= 3) return "bg-gray-800"; // High contributions
    return "bg-gray-200"; // Default
  };

  return (
    <div className="flex flex-col items-center">
      {/* Container for all months */}
      <div className="flex gap-6">
        {months.map((month, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Render grid of contributions */}
            <div
              className="grid grid-cols-7 gap-x-1 gap-y-[]"
              style={{ height: "84px" }} // Set uniform height for the grid
            >
              {month.contributions.map((count, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-sm ${getIntensityClass(count)}`}
                ></div>
              ))}
            </div>
            {/* Month name */}
            <span className="text-sm text-gray-500 mt-2">{month.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributionGrid;
