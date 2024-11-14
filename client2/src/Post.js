import React from "react"
import lawnmower from "./lawnmower.png"
import { Link } from "react-router-dom"

const Post = () => {
 return (
  <div>
   {" "}
   <div className="post">
    <div className="image">
     <img src={lawnmower} alt="" />
    </div>
    <div className="texts">
     <h2>מכסחת דשא 36 ס”מ 48V (2X24V) עם 2 סוללות 4Ah +מטען Dual Port 4A 48V</h2>
     <p className="info">
      <Link className="author"></Link>
      <time>2023-01-06</time>
     </p>
     <p className="summary">
      Greenworks הוא המותג המוביל בארץ בתחום כלי הגינון הנטענים בחדשנות, בשירות, באיכות
      ובמחיר. Greenworks חרטה על דגלה את דגל החדשנות במגוון ובמבחר המוצרים. אנו עובדי
      ומנהלי המותג Greenworks מתחייבים לעשות כל שביכולתנו על מנת להעניק לקהל לקוחותינו
     </p>
    </div>
   </div>
  </div>
 )
}

export default Post
