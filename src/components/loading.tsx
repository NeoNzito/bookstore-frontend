import loadingIcon from "../../public/loading.svg";

const Loading = () => {
    return (
        <div className="flex bg-slate-100 font-bold rounded-md items-center w-full justify-center animate-pulse">
            <h1>Loading...</h1>
            <img src={loadingIcon} width={64} />
        </div>
    );
}

export default Loading;