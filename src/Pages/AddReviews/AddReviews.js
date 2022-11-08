import React from 'react';


const AddReviews = () => {

    const handleAddReview =event=>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const photoURL = form.photoURL.value;
        const review = form.message.value;
        console.log(name,
            photoURL,
            review);


            const addreview = {

                 name,
                photoURL,
                review,
            }
        

            fetch('http://localhost:5000/reviews',{
                method:'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(addreview)

            })
            .then(res =>res.json())
            .then( data => {
                console.log(data)
            if(data.acknowledged){
                alert('added review successfully')
                form.reset();
            }})
               .catch(error => console.error(error));



    }
    return (
        <div>
            add a reviews for me.please!

            <form onSubmit={handleAddReview}>
                <div>
                    <input type="text" name='name'
                    placeholder='your name'  />

                    <input type="photoURL" name='photoURL'
                    placeholder='enter your photo url'/> 
                </div>

                <textarea name="message" id="" cols="30" rows="10" className='w-30' placeholder='write a review about my service' ></textarea>

               <div>
               <input className='btn btn-danger' type="submit" value="add a review" />
             
               </div>
            </form>
        </div>
    );
};

export default AddReviews;