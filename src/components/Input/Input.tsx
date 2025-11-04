import { useState } from 'react';
import s from './Input.module.css';
import eyeIcon from '../../assets/icons/eye.svg';
import eyeOffIcon from '../../assets/icons/eye-off.svg';

export interface InputProps {
  /** What is the type of input? */
  inputType: 'text' | 'password' | 'number';
  /** Input contents */
  placeholder: 'Email' | 'Password' | 'Age';
  /** Should input be clearable */
  clearable?: boolean;
  /** Optional event handler */
  onClear?: () => void;
}

const Input = ({
  inputType = 'text',
  placeholder = 'Email',
  clearable = true,
  onClear,
  ...props
}: InputProps) => {
  const [value, setValue] = useState('');
  const [showPassword, changeShowPassword] = useState(false);

  const handleClear = () => {
    setValue('');
    onClear?.();
  };

  return (
    <div className={s.inputWrap}>
      <input
        type={
          inputType === 'password'
            ? showPassword
              ? 'text'
              : 'password'
            : inputType
        }
        placeholder={placeholder}
        className={s.input}
        value={value}
        onChange={e => setValue(e.target.value)}
        {...props}
      />

      {clearable && value && (
        <button type="button" onClick={handleClear} className={s.clearBtn}>
          x
        </button>
      )}

      {inputType === 'password' && (
        <img
          src={showPassword ? eyeIcon : eyeOffIcon}
          className={s.eyeIcon}
          onClick={() => changeShowPassword(!showPassword)}
        />
      )}
    </div>
  );
};

export default Input;
