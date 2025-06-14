import { useContext, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import { AuthContext } from "../../provider/AuthProvider";
const BillingAddress = ({heading}) => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [ dropDownOpen, setDropDownOpen ] = useState(false);
    const [selectItem, setSelectItem] = useState("Afganstan");
    const {user}= useContext(AuthContext);
    
    useEffect(() => {
        fetch('/dataset/country.json')
            .then(res => res.json()) 
            .then(data => {
                setCountries(data);  
                setFilteredCountries(data)})
            .catch(err => console.error("Error fetching countries:", err));
    }, []);

    // debounce Function 
    const debounceSearch = useMemo(()=>
        debounce((query)=>{
            const result = countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()));
             setFilteredCountries(result);
        }, 300),[countries]
    )

     // Cleanup debounce on unmount
    useEffect(() => {
        return () => {
        debounceSearch.cancel();
        };
    }, [debounceSearch]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        debounceSearch(value);
    }

    return (
         <div className="text-start p-10 px-6 bg-stone-900 rounded-xl">
            <h2 className="text-gray-50 font-semibold text-2xl pb-4">{heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className={`flex flex-col`}>
                    <label htmlFor="firstName">
                        First Name <span className="text-red-700">*</span>
                    </label>
                    {user ? <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="firstName" 
                        id="firstName"
                        value={user.displayName}
                        required
                    />:  <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="firstName" 
                        id="firstName"
                        required
                    />}
                   
                </div>

                <div className={`flex flex-col`}>
                    <label htmlFor="lastName">
                        Last Name <span className="text-red-700">*</span>
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="lastName" 
                        id="lastName"
                        required
                    />
                </div>

                <div className={`flex flex-col`}>
                    <label htmlFor="address1">
                        Address 1 <span className="text-red-700">*</span>
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="address1" 
                        id="address1"
                        required
                    />
                </div>

                <div className={`flex flex-col`}>
                    <label htmlFor="address2">
                        Address 1 
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="address2" 
                        id="address2"
                    />
                </div>

                 <div className={`flex flex-col`}>
                    <label htmlFor="city">
                        City <span className="text-red-700">*</span>
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="city" 
                        id="city"
                        required
                    />
                </div>

                <div className={`flex flex-col`}>
                    <label htmlFor="State">
                        State <span className="text-red-700">*</span>
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="State" 
                        id="State"
                        required
                    />
                </div>

                <div className={`flex flex-col`}>
                    <label htmlFor="postalCode">
                        Postal Code <span className="text-red-700">*</span>
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="postalCode" 
                        id="postalCode"
                        required
                    />
                </div>

                <div className="flex flex-col w-full text-gray-200 relative">
                    <label htmlFor="country" className="mb-1 font-semibold">
                        Country <span className="text-red-600">*</span>
                    </label>

                    <div className="bg-black p-3 rounded-t-md border border-red-600" onClick={()=>setDropDownOpen(!dropDownOpen)}>
                        {selectItem}
                    </div>

                    {/* Dropdown box */}
                    {dropDownOpen && <div className="border border-red-600 rounded-b-md overflow-hidden absolute  top-[100%] left-0 w-full" >
                        {/* Search input */}
                        <input type="text" onChange={handleChange} value={searchTerm}
                        placeholder="Search..."
                        className="w-full bg-stone-800 p-2 px-3 text-white outline-none focus:outline-red-600"
                        />
                        {/* Scrollable list */}
                        <ul className="max-h-60 overflow-y-auto bg-black">
                            {filteredCountries.map(count =><li onClick={()=>{
                                setSelectItem(count.name);
                                setDropDownOpen(false);
                                setSearchTerm('');  
                                setFilteredCountries(countries);
                            }} className="p-2 hover:bg-red-600 cursor-pointer">{count.name}</li>)}
                        </ul>
                    </div>}
                </div>

                <div className={`flex flex-col`}>
                    <label htmlFor="phone">
                        Phone <span className="text-red-700">*</span>
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="number"
                        name="phone" 
                        id="phone"
                        required
                    />
                </div>
            </div>
        </div>

    );
};

export default BillingAddress;
