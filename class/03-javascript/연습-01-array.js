let classmates = ["ö��","����","����"]
// undefined
classmates
// (3)?['ö��', '����', '����']
classmates[0]
// 'ö��'
classmates[1]
// '����'
classmates[2]
// '����'
classmates.includes("����")
// true
classmates.length
// 3
classmates.push("�ͱ�")
// 4
classmates.includes("�ͱ�")
// true
classmates.length
// 4

classmates.pop("�ͱ�")
// '�ͱ�'
classmates
// (3)?['ö��', '����', '����']