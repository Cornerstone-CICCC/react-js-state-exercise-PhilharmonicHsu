type Props = {
    onToggle: () => void
}


export default function LottoNumbers(props: Props) {
    return <>
        <button
            onClick={props.onToggle}
        >GenerateLottoNumbers</button>
    </>
}