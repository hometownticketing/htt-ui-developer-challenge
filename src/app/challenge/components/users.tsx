"use client";

import React from 'react';
import User, { UserInterface } from './user';

export interface UsersInterface {
  users: UserInterface[]
}

const Users = ({ users }: UsersInterface) => {

  const [selected, setSelected] = React.useState('');

  /*

  First step is to get it running, I followed the instructions and all worked well.

  Going over the design, I see the spacing is incorrect between the 2 examples given. While the outer border shows the heights are 
  all equal, the inner column should also be equal, allowing the 'See Profile' to stay in the same location for each user card.

  Also the spacing between the name and the information below it also seems off in the design.

  Normally I would throw out a few questions and continue until I hear back.  I would be asking about the spacing, and the red border.
  Looking at the instructions vs the design, at first I thought the red border was a hover state even though it was not mentioned.
  
  As I got into styling, I see that a red background has to be the mistake as the other colors would have to be dealt with, so 
  based on my experience, it appears the instructions were wrong, and the border would become read when selected, I also allow
  for the user to unselect each item as well.

  While I would be waiting for the design responses, it would allow me to continue, and based upon my experience, it appears the intentions
  were for a read border when selected, and possibly on hover, spacing would be the same for all cards, and the 'See Profile' should always
  remain on the bottom in the same space per card.

  I would also like to know is there a max width or not, at the moment I did set up a max with for the center of the page, would be
  easy to allow for full width, and set a max with on the cards themselves to allow for as many that fit in a row to appear, and 
  currently the cards look bad if they get to small, so I quickly switch it to one column as we shrink the browser or device is mobile.

  Lastly, I see the fonts are a bit different in the example and the screenshots, I would use the fonts in the project currently, and
  switch later as I heard back from the designer as to which font is proper, along with colors of the text items to be confirmed, and 
  the prefered color of red.

  I elected to keep the selected/setSelected here in the users listing page, as the cards themselves could be used elsewhere in a place
  where they might not be clickable or have a red border, so simply passing a class when selected keeps the card itself nice and clean.

  Normally I would pass the selected/setSelected to the card itself, but I simply do not see a need for it at this time, and no
  since over complicating the cards themselves until further requirements are determined.

  For the most part, the only thing that really changed in the process was my deciding the background color red was a mistake and 
  based upon my experience, made the changes I thought were intended.  Only line to change only if the background should be red, and easy to
  remove the hover state if needed.

  I resisted the urge to do more work then was requested, so I left mobile sizes in need of a little work, and did not put in a [slug]
  page that could even use the same card to show one item at a time.

  Seems solid and ready to go, going to push the changes now.
  */

  return (
    <section className="max-w-6xl mx-auto">
      <div className="flex flex-wrap -mx-1.5">
        {!users || users.length === 0 && <div className='mx-auto text-center'>No results found.</div>}
        {users && users.length > 0 && users.map((user: UserInterface, idx: number) => (
          <div key={idx} onClick={() => setSelected(selected === user.id ? '' : user.id)} className="cursor-pointer flex w-full lg:w-1/2 px-1.5 mt-4">
            <User {...user} className={`${selected === user.id ? 'border-red-700' : ''} hover:border-red-700`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Users;