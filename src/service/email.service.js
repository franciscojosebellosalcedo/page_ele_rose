import emailjs from "@emailjs/browser";

export const sendEmail=async (serviceID,templateID,templateParams)=>{
	return await emailjs.send(serviceID, templateID, templateParams);
}