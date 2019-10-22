const FA_ERROR_MESSAGES= {
  accepted: 'فیلد می بایست تایید شود',
  alpha: 'فیلد می بایست فقط شامل حروف انگلیسی باشد',
  alpha_dash: 'فیلد می بایست فقط شامل حروف انگلیسی و خط تیره و زیرخط باشد',
  alpha_num: 'فیلد می بایست فقط شامل حروف و اعداد باشد',
  between: 'فیلد می بایست بزرگتر از :min و کوچکتر از :max باشد',
  confirmed: 'تطبیق فیلد :attribute صحیح نمی باشد',
  email: 'فرمت ایمیل وارد شده صحیح نمی‌باشد',
  date: 'تاریخ درج شده صحیح نیست',
  def: 'فیلد :attribute اشکال دارد',
  digits: 'فیلد می بایست شامل :digits رقم باشد',
  digits_between: ':attribute باید بین :min و :max رقم باشد.',
  different: 'فیلد :attribute می بایست مقداری غیر از :different داشته باشد',
  in: 'فیلد انتخاب شده صحیح نمی باشد',
  integer: 'فیلد می بایست عددی باشد',
  hex: 'فیلد باید در فرمت مبنای ۱۶ باشد',
  min: {
    numeric: 'فیلد می بایست از :min بزرگتر باشد',
    string: 'فیلد بایستی حداقل :min کاراکتر طول داشته باشد'
  },
  max: {
    numeric: 'فیلد می بایست از :max کوچکتر باشد',
    string: 'فیلد نباید بیشتر از :max کاراکتر طول داشته باشد'
  },
  not_in: 'فیلد انتخاب شده صحیح نمی باشد',
  numeric: 'فیلد می بایست عددی باشد',
  present: 'The :attribute field must be present (but can be empty).',
  required: 'فیلد الزامی است',
  required_if: 'در صورت دادن :value به :other تکمیل فیلد :attribute الزامی است',
  same: 'فیلد :attribute می بایست با فیلد :same یکی باشد',
  size: {
    numeric: 'فیلد :attribute می بایست :size باشد',
    string: 'فیلد :attribute می بایست :size کاراکتر طول داشته باشد'
  },
  string: 'فیلد می بایست متنی باشد',
  url: 'آدرس فیلد صحیح نمی باشد',
  regex: 'فرمت آدرس صحیح نمی باشد',
  attributes: {}
};

export default FA_ERROR_MESSAGES;
