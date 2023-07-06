let classmates = ["Ã¶¼ö","¿µÈñ","ÈÆÀÌ"]
// undefined
classmates
// (3)?['Ã¶¼ö', '¿µÈñ', 'ÈÆÀÌ']
classmates[0]
// 'Ã¶¼ö'
classmates[1]
// '¿µÈñ'
classmates[2]
// 'ÈÆÀÌ'
classmates.includes("ÈÆÀÌ")
// true
classmates.length
// 3
classmates.push("¸Í±¸")
// 4
classmates.includes("¸Í±¸")
// true
classmates.length
// 4

classmates.pop("¸Í±¸")
// '¸Í±¸'
classmates
// (3)?['Ã¶¼ö', '¿µÈñ', 'ÈÆÀÌ']