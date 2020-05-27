import React, { useContext } from 'react';
import '../../../css/main.css';
import { ThemeContext } from "../../contexts/ThemeContext";
import Dashboard from "./Dashboard";



const MainLayout = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        //Consume theme context in functional components



        // <div className="flex mt-4" style={{ background: theme.bg, color: theme.syntax }}>

        //     <div className="w-full md:w-1/4  md:mx-8 items-center justify-center " >

        //     </div>
        //     <div className="w-full md:w-3/4 " >
        //         <Dashboard />
        //     </div>

        // </div>

        <div class="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
            <div class="flex flex-wrap -mx-4" >
                <div class="w-full  mb-6 lg:mb-0 lg:w-1/4 px-4 flex-col " >
                    <div class="flex-grow flex flex-col border-t border-b sm:rounded sm:border shadow overflow-hidden" style={{ background: theme.bg, color: theme.syntax }}>
                        <div class="border-b">
                            <div class="flex justify-between px-6 -mb-px">
                                <h3 class="text-blue-dark py-4 font-normal text-lg">Your Portfolio</h3>
                                <div class="flex">

                                </div>
                            </div>
                        </div>

                        <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quisquam ea nemo eligendi illo voluptate dolore illum blanditiis! A non ad ea voluptatem ipsum minima iusto aperiam assumenda recusandae accusamus?
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-3/4 px-4">
                    <div class="border-t border-b sm:rounded sm:border shadow" style={{ background: theme.bg, color: theme.syntax }} >
                        <div class="border-b">
                            <div class="flex justify-between px-6 -mb-px">
                                <h3 class="text-blue-dark py-4 font-normal text-lg">Recent Activity</h3>
                            </div>
                        </div>

                        <div class="text-center px-6 py-4">
                            <div class="py-8">
                                <div class="mb-4">
                                    <svg class="inline-block fill-current text-grey h-16 w-16" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z" />
                                    </svg>
                                </div>
                                <p class="text-2xl text-grey-darker font-medium mb-4"><Dashboard /></p>

                                <div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
}

export default MainLayout;