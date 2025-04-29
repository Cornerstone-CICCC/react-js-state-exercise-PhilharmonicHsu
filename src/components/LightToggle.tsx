type Props = {
    onToggle: () => void
}

export default function LightToggle(props: Props) {
    return <>
        <button onClick={props.onToggle}>Light switch</button>
    </>
}