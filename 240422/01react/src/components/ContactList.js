import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  const [filteredList, setfilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setfilteredList(list);
    } else {
      setfilteredList(contactList);
    }
  }, [keyword]);
  return (
    <div>
      <SearchBox />
      {filteredList.map((item, idx) => (
        <ContactItem key={idx} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
