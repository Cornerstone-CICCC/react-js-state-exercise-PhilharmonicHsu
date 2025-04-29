type Props = {
    onToggle: () => void
}

export default function ClickCounter(props: Props) {
    return <>
        <button
            onClick={props.onToggle}
        >Counter</button>
    </>
}