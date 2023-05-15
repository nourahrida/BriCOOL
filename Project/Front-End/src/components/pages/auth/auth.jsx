import Login from "./login";
import {
    LazyForgotPassword,
    LazyLoginPage,
    LazyRegisterPage,
    LazyResetPassword,
    LazyVerifyMail,
} from "../../utils/pagesLinks";

// import {
//     Button,
//     Dialog,
//     DialogHeader,
//     DialogBody,
//     DialogFooter,
//   } from "@material-tailwind/react";

function Auth({ formName }) {
    switch (formName) {
        case "login":
            return <LazyLoginPage />;
        case "register":
            return <LazyRegisterPage />;
        case "forgot-password":
            return <LazyForgotPassword />;
        case "VerifyMail":
            return <LazyVerifyMail />;
        case "resetPassword":
            return <LazyResetPassword />;
        default:
            return <Login />;
    }
}

// function Example() {
//     const [open, setOpen] = react.useState(false);

//     const handleOpen = () => setOpen(!open);

//     return (
//       <react.Fragment>
//         <Button onClick={handleOpen} variant="gradient">
//           Open Dialog
//         </Button>
//         <Dialog
//           open={open}
//           handler={handleOpen}
//           animate={{
//             mount: { scale: 1, y: 0 },
//             unmount: { scale: 0.9, y: -100 },
//           }}
//         >
//           <DialogHeader>Its a simple dialog.</DialogHeader>
//           <DialogBody divider>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
//             reprehenderit omnis perspiciatis aut odit! Unde architecto
//             perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
//             praesentium magni corrupti explicabo!
//           </DialogBody>
//           <DialogFooter>
//             <Button
//               variant="text"
//               color="red"
//               onClick={handleOpen}
//               className="mr-1"
//             >
//               <span>Cancel</span>
//             </Button>
//             <Button variant="gradient" color="green" onClick={handleOpen}>
//               <span>Confirm</span>
//             </Button>
//           </DialogFooter>
//         </Dialog>
//       </react.Fragment>
//     );
//   }

export default Auth;
