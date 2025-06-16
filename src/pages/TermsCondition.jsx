import React from 'react';

const TermsCondition= () => {
     const privacyContent = [
  {
    title: "1. What Personal Information About Users Does streamit Collect?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. 
      Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo in posuere nisi efficitur sed. 
      Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. 
      Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut 
      leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem`
  },
  {
    title: "2. Cookies and Web Beacons",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. 
      Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo in posuere nisi efficitur sed.

      Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. 
      Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. 
      Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem`
  },
  {
    title: "3. Third Party Payment Gateway – Financial Information",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. 
      Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo in posuere nisi efficitur sed. 
      Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. 
      Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. 
      Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem`
  },
  {
    title: "4. Disclosure Children’s Privacy",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. 
      Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo in posuere nisi efficitur sed. 
      Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. 
      Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. 
      Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem`
  }
    ];
    return (
<div className="bg-black text-white text-start px-4 md:px-10 py-10 border-b border-gray-800">
      {privacyContent.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
          <p className="text-gray-300 ">{section.content}</p>
        </div>
      ))}
    </div>
    );
};

export default TermsCondition;