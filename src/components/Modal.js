import React from 'react'

export default function Modal({addCard, closeModal}) {

    let [formData, setFormData] = React.useState({
        title: "",
        location: "",
        mapURL: "",
        startDate: "",
        endDate: "",
        description: "",
        imageURL: ""
    });

    function handleChange(event) {
        let { name, value, type } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        let newCard = {
            ...formData
        };
        addCard(newCard);
        setFormData({
            title: "",
            location: "",
            mapURL: "",
            startDate: "",
            endDate: "",
            description: "",
            imageURL: ""
        });
        closeModal();
    }

    let bgRef = React.useRef();
    function handleBGClick(event) {
        if(event.target === bgRef.current) {
            closeModal();
        }
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prevData => ({
                    ...prevData,
                    imageURL: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    }


    return (
        <div className='modal' ref = {bgRef} onClick={handleBGClick}>
            <div className='modal--inner'>
                <button className='modal--close' onClick={closeModal}>
                    <svg className='modal--close--svg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </button>
                <h1 className='modal--header'>Enter new entry details</h1>
                <form onSubmit={handleSubmit} className='modal--form--outer'>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        className='modal--form'
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        className='modal--form'
                    />
                    <input
                        type="text"
                        name="mapURL"
                        placeholder="Map URL"
                        value={formData.mapURL}
                        onChange={handleChange}
                        className='modal--form'
                    />
                    <input
                        type="text"
                        name="startDate"
                        id="startDate"
                        placeholder="Start Date"
                        value={formData.startDate}
                        onChange={handleChange}
                        className='modal--form'
                    />
                    <input
                        type="text"
                        name="endDate"
                        id="endDate"
                        placeholder="End Date"
                        value={formData.endDate}
                        onChange={handleChange}
                        className='modal--form'
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className='modal--form--textarea'
                    />
                    <input
                        type="file"
                        name="imageURL"
                        placeholder="Image URL"
                        // value={formData.imageURL}
                        onChange={handleFileChange}
                        className='modal--form--image'
                    />
                    <button className='modal--submit'>Add Card</button>
                </form>
            </div>
        </div>
    )
}