const Contact = () =>{
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">ContactUs Page..</h1>
            <form>
                <input 
                    type="text" 
                    className="p-2 m-2 border border-black" 
                    placeholder="name">
                </input>
                <input 
                    type="text" 
                    className="p-2 m-2 border border-black" 
                    placeholder="email-id"></input>
                <input 
                    type="text" 
                    className="p-2 m-2 border border-black" 
                    placeholder="message"></input>
                <button 
                    className="border border-green-800 bg-green-700 p-2 m-2 rounded-lg">
                    Submit</button>
            </form>
        </div>
    )
};

export default Contact;
