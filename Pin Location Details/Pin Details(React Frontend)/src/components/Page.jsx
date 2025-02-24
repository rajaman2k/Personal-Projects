import React, { useState } from "react";

const Page = () => {
    const [formData, setFormData] = useState({
        pin: "",
        district: "",
        state: "",
        area: "",
    });

    const [areaOptions, setAreaOptions] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePinChange = async (e) => {
        const pin = e.target.value;
        setFormData({ ...formData, pin });

        if (pin.length === 6) {
            try {
                const response = await fetch(`http://localhost:8080/api/${pin}`);
                if (!response.ok) throw new Error("Invalid PIN");

                const data = await response.json();
                setAreaOptions(data);

                if (data.length > 0) {
                    const firstArea = data[0];
                    setFormData({
                        ...formData,
                        pin,
                        area: firstArea.area,
                        district: firstArea.district,
                        state: firstArea.state,
                    });
                } else {
                    setFormData({
                        ...formData,
                        pin,
                        area: "",
                        district: "",
                        state: "",
                    });
                }
            } catch (error) {
                alert("PIN not found. Please enter a valid 6-digit PIN.");
                setFormData({ ...formData, district: "", state: "", area: "" });
            }
        }
    };

    const handleAreaChange = (e) => {
        const selectedArea = e.target.value;
        const selectedData = areaOptions.find((area) => area.area === selectedArea);

        if (selectedData) {
            setFormData({
                ...formData,
                area: selectedArea,
                district: selectedData.district,
                state: selectedData.state,
            });
        }
    };

    const handleReset = () => {
        setFormData({ pin: "", district: "", state: "", area: "" });
    };

    return (
        <div className="container">
            <h2>Pin LookUp!</h2>
            <form>
                <label>PIN Code:</label>
                <input
                    type="text"
                    name="pin"
                    value={formData.pin}
                    onChange={handlePinChange}
                    maxLength="6"
                    placeholder="Enter 6-digit PIN"
                />
                <p />
                <label>Area:</label>
                <select name="area" value={formData.area} onChange={handleAreaChange}>
                    <option value="">Select Area</option>
                    {areaOptions.map((area, index) => (
                        <option key={index} value={area.area}>
                            {area.area}
                        </option>
                    ))}
                </select>
                <p />
                <label>District:</label>
                <input type="text" name="district" value={formData.district} readOnly />
                <p />
                <label>State:</label>
                <input type="text" name="state" value={formData.state} readOnly />
                <p />
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
};

export default Page;
