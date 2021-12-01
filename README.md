# nomadVanilaJS

**Variable Type**
> Undefined
>> 값을 할당하지 않은 변수는 undefined 자료형.
>> 메서드와 선언도 평가할 변수가 값을 할당받지 않은 경우에 undefined를 반환
>> 함수는 값을 명시적으로 반환하지 않으면 undefined를 반환
>> `typeof`를 통해 검출할 때는 `===`비교 연산자를 통해 선언하지 않은 변수를 찾아낼 수도 있음
>> `void valuename`로 대체할 시, 할당하지 않은 변수를 찾을 수 있지만 선언하지 않은 변수는 reference error 발생
>
> Null
>> 어떤 값이 의도적으로 비어있음(존재하지만 값이나 자료형이 없는)을 표현하며 boolean 연산에서는 false로 취급
>> 모든 객체는 null 값으로 부터 파생되며 따라서 `typeof` 연산자는 아래의 코드에서 `object`를 반환 **(typeof로는 안나옴)**
>
> ***null과 undefined 를 제외하고, 모든 원시 값은 원시 값을 래핑한 객체를 가짐(이하 변수타입)***
>
> Boolean
>> 논리 자료형
>> 잘 알려진 `true` or `false` 그녀석
>
> Number
>> 숫자 자료형
>> 3가지 상징적인 값, `NaN`(Not-A-Number), `+Infinity`, `-Infinity` 있음
>
> Bignt
>> Number 자료형이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체
>> 정수 끝에 n을 추가하거나 생성자를 호출하여 생성
>
> String
>> 문자열 자료형
>
> Symbol
>> 유일하고 변경 불가능한 (immutable) 기본값 (primitive value)
>> 객체 속성의 key 값으로도 사용될 수 있음
>> 몇몇 프로그래밍 언어에서는 Symbol을 atom 이라고 지정, C언어의 이름있는 열거형 (enum) 과도 비슷 
---
