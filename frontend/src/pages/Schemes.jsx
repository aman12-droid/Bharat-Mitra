import { useEffect, useState } from "react";
import { getSchemes } from "../services/schemeService";

function Schemes() {

    const [schemes,setSchemes]=useState([]);

    useEffect(()=>{

        loadSchemes();

    },[]);

    const loadSchemes=async()=>{

        const data=await getSchemes();

        setSchemes(data);

    }

    return(

        <div className="p-10">

            <h1 className="text-4xl font-bold mb-8">

                Government Schemes

            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                {

                    schemes.map((scheme)=>(

                        <div
                        key={scheme.id}
                        className="bg-white shadow rounded-xl p-6">

                            <h2 className="text-xl font-bold">

                                {scheme.title}

                            </h2>

                            <p className="text-blue-600">

                                {scheme.category}

                            </p>

                            <p className="mt-4">

                                {scheme.description}

                            </p>

                            <a

                            href={scheme.link}

                            target="_blank"

                            className="text-blue-700 font-bold mt-5 inline-block"

                            >

                                View Scheme →

                            </a>

                        </div>

                    ))

                }

            </div>

        </div>

    )

}

export default Schemes;