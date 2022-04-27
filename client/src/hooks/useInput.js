import {useEffect, useState} from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [minNumber, setMinNumber] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    if (value.length < validations[validation]) {
                        setMinLengthError(true)
                    } else {
                        setErrorMessage("Слишком мало символов")
                        setMinLengthError(false)
                    }
                    break
                case 'isEmpty':
                    if (value) {
                        setEmpty(false)
                    } else {
                        setErrorMessage("Поле не может быть пустым")
                        setEmpty(true)
                    }
                    break
                case 'maxLength':
                    if (value.length > validations[validation]) {
                        setMaxLengthError(true)
                    } else {
                        setErrorMessage("Слишком много символов")
                        setMaxLengthError(false)
                    }
                    break
                case 'isEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                    if (re.test(String(value).toLowerCase())) {
                        setEmailError(false)
                    } else {
                        setEmailError(true)
                        setErrorMessage("Неккоректный email")
                    }
                    break
                case 'numberMin':
                    if (value > validations[validation]) {
                        setMinNumber(false)
                    } else {
                        setMinNumber(true)
                        setErrorMessage("Cлишком малое число")
                    }
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || maxLengthError || minLengthError || emailError || minNumber) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, maxLengthError, minLengthError, emailError, minNumber])

    return {
        isEmpty,
        minLengthError,
        errorMessage,
        emailError,
        maxLengthError,
        inputValid,
        minNumber
    }
}
const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (e) => setValue(e.target.value)
    const onBlur = () => setDirty(true)
    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

export default useInput