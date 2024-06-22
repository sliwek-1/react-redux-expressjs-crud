import { useField } from "formik";

export function Input({label, ...props}) {
    const [field, meta] = useField(props);
    return (
        <>  
            <tr>
                <td>
                    <label htmlFor={props.id} className="label">
                        {label}:
                    </label>
                </td>
                <td>
                    <input {...field} {...props} className="input"/>
                </td>
            </tr>
            <tr>
                <td>

                </td>
                <td>
                    {meta.error ? <p className="danger-control">
                    {meta.error}
                    </p> : <p className="good-control">Wszystko ok!</p>}
                </td>
            </tr>
        </>
    )
}