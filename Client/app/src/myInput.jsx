import { useField } from "formik";

export function Input({label, ...props}) {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id}>
                {label}
                <input {...field} {...props} />
            </label>

            {meta.error ? <small style={{color: "red", fontWeight: "bold"}}>
                {meta.error}
            </small> : <small style={{color: "green", fontWeight: "bold"}}>Wszystko ok!</small>}
        </>
    )
}