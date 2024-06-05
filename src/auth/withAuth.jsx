"use client"

import { useUser } from "@/context/UserContext";
import { useEffect } from "react";
import { redirect } from "next/navigation";


export default function withAuth(Component) {

return function withAuth(props) {

    const { partnerId } = useUser();
    console.log('partnerId:',partnerId);
    useEffect(() => {
      if (!partnerId ) {
         redirect('/LogIn');
      }
    }, []);
   
    if(!partnerId) {
        redirect ('/LogIn');
      }
      return <Component {...props} />;
    };


}