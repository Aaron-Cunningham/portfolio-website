'use server';
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-for-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (FormData: FormData) => {
    

    const senderEmail = FormData.get('senderEmail')
    const message = FormData.get('senderMessage')
    try{
        resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'aaroncunningham222@gmail.com',
            subject: 'Message from portfolio',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail,{
                message: message as string,
                senderEmail: senderEmail as string
            })
        });
    }catch(error:unknown){
        if(error instanceof Error){
            return{
                error: error.message, 
            };
        }else if (error && typeof error == 'object' && 'message' in error){
            return{
                error: error.message
            }
            
        }
    }
};