import { notifications } from "@mantine/notifications";

export default function notification(message:string,status:("error"|"success"|"warning"|undefined) = "error"){
    notifications.show({
        message,
        title: status === "error" ? "Error" : status === "success" ? "Success" : "Warning",
        color: status === "error" ? "red" : status === "success" ? "green" : "yellow",
    })
}