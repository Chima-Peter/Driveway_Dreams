import { useState } from "react";
import { motion, AnimatePresence } from 'motion/react'

import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { GoHistory } from "react-icons/go";

import AllSearchTab from "./all_search_tab";
import HistoryTab from "./history_tab";
import SearchProvider from "../../context/search_context";



const SearchBar = () => {

    // tabs in the search bar
    const tabs = [
        {
            icon: <HiOutlineSwitchHorizontal className="w-6 h-6" />,
            text: 'All',
            content: <AllSearchTab />
        },
        {
            icon: <GoHistory className="w-6 h-6" />,
            text: 'History',
            content: <HistoryTab />
        }
    ]
    // state to control the active tab from all the tabs
    const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <aside className="tablet:w-[320px] flex flex-col font-main gap-6 bg-white shadow-xl border border-gray-200 h-[100vh] overflow-y-auto pt-[100px] sticky top-0 z-10 overflow-x-hidden asideScroll">
        <div className="flex flex-col gap-2 border-b border-b-200 shadow-xl w-[100%] sticky -top-6 pt-2 bg-white z-20">
            <h1 className="text-blue-950 font-extrabold text-lg uppercase mt-2 px-6">
                Filter
            </h1>
            <ul className="flex justify-between items-center w-[100%]">
                {
                    tabs.map((tab, index) => (
                        <motion.li
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            key={index}
                            className={`flex flex-col px-4 py-2 gap-1 cursor-pointer w-[50%] items-center ${selectedTab.text === tab.text? 'border-b-4  text-blue-600 border-blue-600' : 'text-gray-500'}`}
                            onClick={() => setSelectedTab(tab)}
                        >
                            {tab.icon}
                            <p className="text-sm font-bold">{tab.text}</p>
                            {
                                selectedTab === tab && <motion.div layoutId="underline" />
                            }
                        </motion.li>
                    ))
                }
            </ul>
        </div>
        <AnimatePresence mode="wait">
            <motion.div
                key={selectedTab ? selectedTab.text : 'empty'}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pb-6"
            >
                <SearchProvider>
                    {selectedTab.content}
                </SearchProvider>
            </motion.div>
        </AnimatePresence>
    </aside>
  )
}

export default SearchBar