import NavBar from "./NavBar";

// children은 react.js에서 제공하는 props
// 하나의 component를 또 다른 component에 넣을 수 있음
export default function Layout({children}) {
    return (
    <>
        <NavBar></NavBar>
        <div>
            {children}
        </div>
    </>
    );
}