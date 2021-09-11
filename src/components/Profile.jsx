import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <div>
        <img src='https://idg.net.ua/blog/wp-content/uploads/videofon-dlya-sajta-html5-700x325.jpg' alt='картинка2'/>
     </div>
     <div>
       ava + description  
     </div>
     <div>
         my post
         <div>
             new post
             <div className={s.posts}>
                 <div className={s.item}>
                     post1
                 </div>
                 <div className={s.item}>
                     post2
                 </div>
             </div>
         </div>
     </div>
 </div>   

}

export default Profile;        