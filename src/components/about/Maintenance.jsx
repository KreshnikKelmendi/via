import React, { useEffect, useState } from 'react';
import { apiUrl } from '../api/apiUrl';

const Maintenance = ({ currentLanguage }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortByAmount, setSortByAmount] = useState(null);
    const [sortByDate, setSortByDate] = useState(null);

    const projectsPerPage = 8;

    useEffect(() => {
        fetchData();
    }, [currentLanguage, sortByAmount, sortByDate]);

    const fetchData = async () => {
        try {
            let url = `${apiUrl}/api/summer-and-winter-road-maintenances?populate=*`;

            // Sort by creation date in descending order for newest projects
            if (sortByAmount !== null) {
                url += `&sort=amount:${sortByAmount ? 'DESC' : 'ASC'}`;
            } else if (sortByDate !== null) {
                url += `&sort=createdAt:${sortByDate ? 'DESC' : 'ASC'}`;
            } else {
                // Default sorting by creation date in descending order
                url += `&sort=createdAt:DESC`;
            }

            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Function to filter newest projects
    const filterNewestProjects = () => {
        const sortedData = [...data.data];
        sortedData.sort((a, b) => {
            return new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt);
        });
        setData({ data: sortedData });
    };

    // Function to filter oldest projects
    const filterOldestProjects = () => {
        const sortedData = [...data.data];
        sortedData.sort((a, b) => {
            return new Date(a.attributes.createdAt) - new Date(b.attributes.createdAt);
        });
        setData({ data: sortedData });
    };

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = data?.data?.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSortChange = (value) => {
        // Toggle sorting direction when the same option is selected twice
        if (sortByAmount === null || sortByAmount !== value) {
            setSortByAmount(value);
            setSortByDate(null); // Reset sortByDate when sorting by amount
        } else {
            setSortByAmount(!value);
            setSortByDate(null);
        }
    };

    const handleDateSortChange = (value) => {
        if (value === "true") {
            filterNewestProjects();
        } else if (value === "false") {
            filterOldestProjects();
        }
        // Reset sortByAmount when sorting by date
        setSortByAmount(null);
    };

    return (
        <div className='absolute top-0 lg:px-8 w-full h-full flex items-center lg:justify-end overflow-x-auto'>
            <div className="inline-block min-w-full shadow-sm rounded-lg">
                <p className='font-custom text-3xl text-white rounded-md bg-[#313232] uppercase bg-opacity-75 p-3 2xl:py-10 2xl:text-4xl'>
                    {currentLanguage === "en"
                        ? data?.data?.[0]?.attributes?.title
                        : data?.data?.[0]?.attributes?.localizations?.data[0]?.attributes?.title}
                </p>

                <div className="flex justify-end">
                    <select
                        value={sortByDate}
                        onChange={(e) => handleDateSortChange(e.target.value)}
                        className="text-white font-custom1 bg-[#313232] bg-opacity-75 hover:bg-gray-700 px-4 py-2 2xl:py-5 2xl:text-lg rounded-lg mt-4"
                    >
                        <option value={null}>Sort by Date</option>
                        <option value={"true"}>Newest Projects</option>
                        <option value={"false"}>Oldest Projects</option>
                    </select>
                    <select
                        value={sortByAmount}
                        onChange={(e) => handleSortChange(e.target.value)}
                        className="text-white font-custom1 bg-[#313232] bg-opacity-75 hover:bg-gray-700 px-4 py-2 2xl:py-5 2xl:text-lg rounded-lg mt-4 ml-4"
                    >
                        <option value={null}>Sort by Amount</option>
                        <option value={true}>Highest Amount</option>
                        <option value={true}>Lowest Amount</option>
                    </select>
                </div>

                <table className="min-w-full mt-6 bg-[#313232] bg-opacity-75">
                    <thead>
                        <tr className='uppercase text-white'>
                            <th className="border-l-0 lg:px-4 py-3 bg-[#313232] text-center lg:text-left text-sm 2xl:text-lg lg:text-base">Project Name</th>
                            <th className="border-t-0 border-l lg:px-4 py-3 bg-[#313232] text-center lg:text-left text-sm 2xl:text-lg lg:text-base">Contractor</th>
                            <th className="border-t-0 border-l border-r lg:px-4 py-3 bg-[#313232] text-center lg:text-left text-sm 2xl:text-lg lg:text-base">Period</th>
                            <th className="border-r-0 lg:px-4 py-3 bg-[#313232] text-center lg:text-left text-sm 2xl:text-lg lg:text-base">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProjects?.map(project => (
                            <tr key={project.id} className='font-custom1 text-white'>
                                <td className="text-center border-l-0 lg:text-left border lg:px-4 py-2 text-sm 2xl:text-lg lg:text-base">
                                    {currentLanguage === "en"
                                        ? project?.attributes?.projectName
                                        : project?.attributes?.localizations?.data[0]?.attributes?.projectName}
                                </td>
                                <td className="text-center lg:text-left border lg:px-4 py-2 text-sm 2xl:text-lg lg:text-base">
                                    {currentLanguage === "en"
                                        ? project?.attributes?.contractor
                                        : project?.attributes?.localizations?.data[0]?.attributes?.contractor}
                                </td>
                                <td className="text-center lg:text-left border lg:px-4 py-2 text-sm 2xl:text-lg lg:text-base">
                                    {
                                        currentLanguage === "en"
                                            ? project?.attributes?.projectStart + " - " + project?.attributes?.projectFinish
                                            : project?.attributes?.localizations?.data[0]?.attributes?.projectStart + " - " + 
                                            project?.attributes?.localizations?.data[0]?.attributes?.projectFinish
                                    }
                                </td>
                                <td className="text-center lg:text-left border border-r-0 lg:px-4 py-2 text-sm 2xl:text-lg lg:text-base">
                                    {currentLanguage === "en"
                                        ? project?.attributes?.amount
                                        : project?.attributes?.localizations?.data[0]?.attributes?.amount} €
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(data?.data?.length / projectsPerPage) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`mx-1 px-3 py-1 rounded-lg ${currentPage === i + 1 ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Maintenance;
