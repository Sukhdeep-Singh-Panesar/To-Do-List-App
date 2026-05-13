import {useContext} from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {AlertContext} from "@/context/AlertContext.ts";

const Alert = () => {
    const context = useContext(AlertContext);

    if (!context) {
        throw new Error("AlertContext must be used inside AlertContext.Provider");
    }

    const { alert, setAlert, addTitle } = context;
    return (

        <AlertDialog  open={alert} onOpenChange={setAlert}>
            <AlertDialogContent className="bg-red-200">
                <AlertDialogHeader>
                    <AlertDialogTitle className={'items-center  font-bold'}>Missing</AlertDialogTitle>
                    <AlertDialogDescription className="text-sm  font-semibold text-red-600">
                        {addTitle===""? "Title is Missing" : "Detail is Missing"}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction className={'flex justify-center text-xl cursor-pointer hover:bg-green-600'} onClick={()=> setAlert(false)}>OK</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
export default Alert
