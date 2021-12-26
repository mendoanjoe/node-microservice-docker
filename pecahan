function pecahanBiasa() {
    const manPb1 = document.getElementById('man-pb1');
    const manPb11 = document.getElementById('man-pb11');
    const manPb2 = document.getElementById('man-pb2');
    const manPb22 = document.getElementById('man-pb22');
    const manPbOP = document.getElementById('man-pbOp');
    const manPbRs = document.getElementById('man-pbRs');
    const manPbSt = document.getElementById('man-pbSt');

    let h = 0;
    let s = 'Kesalahan!';

    if (manPb1 != null
        && manPb11 != null
        && manPb2 != null
        && manPb22 != null
        && manPbOP != null
        && manPbRs != null
        && manPbSt != null
    ) {
        let a = parseInt(manPb1.value)
        let b = parseInt(manPb11.value)
        let c = parseInt(manPb2.value)
        let d = parseInt(manPb22.value)

        if (manPbOP.value == '+') {
            h = (a/b) + (c/d);
            if (b == d) {
                s = `(${a}/${b}) + (${c}/${d}) = ${a+c}/${b} = ${h} = ${h * 100}%`
            } else {
                s = `(${a}/${b}) + (${c}/${d}) = (${a*d}/${b*d}) + (${c*b}/${d*b}) = ${(a*d)+(c*b)}/${d*b} = ${h} = ${h * 100}%`;
            }
        }

        if (manPbOP.value == '-') {
            h = (a/b) - (c/d);
            if (b == d) {
                s = `(${a}/${b}) - (${c}/${d}) = ${a-c}/${b} = ${h} = ${h * 100}%`
            } else {
                s = `(${a}/${b}) - (${c}/${d}) = (${a*d}/${b*d}) - (${c*b}/${d*b}) = ${(a*d)-(c*b)}/${d*b} = ${h} = ${h * 100}%`;
            }
        }

        if (manPbOP.value == '/') {
            h = (a/b) / (c/d);
            s = `(${a}/${b}) / (${c}/${d}) = (${a}/${b}) * (${d}/${c}) = ${a*d}/${b*c} = ${h} = ${h * 100}%`;
        }

        if (manPbOP.value == '*') {
            h = (a/b) * (c/d);
            s = `(${a}/${b}) * (${c}/${d}) = ${a*c}/${b*d} = ${h} = ${h * 100}%`
        }
    }

    manPbSt.textContent = s
    manPbRs.value = h

    h = 0;
    s = 'Kesalahan!';
}

function pecahanCampuran() {
    const manPc1 = document.getElementById('man-pc1');
    const manPc2 = document.getElementById('man-pc2');
    const manPc22 = document.getElementById('man-pc22');
    const manPc3 = document.getElementById('man-pc3');
    const manPc4 = document.getElementById('man-pc4');
    const manPc44 = document.getElementById('man-pc44');
    const manPcOP = document.getElementById('man-pcOp');
    const manPcRs = document.getElementById('man-pcRs');
    const manPcSt = document.getElementById('man-pcSt');
    
    let h = 0;
    let s = 'Kesalahan!';

    if (manPc1 != null
        && manPc1 != null
        && manPc2 != null
        && manPc22 != null
        && manPc3 != null
        && manPc4 != null
        && manPc44 != null
        && manPcOP != null
        && manPcRs != null
        && manPcSt != null
    ) {
        let a = parseInt(manPc1.value)
        let b = parseInt(manPc2.value)
        let c = parseInt(manPc22.value)
        let d = parseInt(manPc3.value)
        let e = parseInt(manPc4.value)
        let f = parseInt(manPc44.value)

        if (manPcOP.value == '+') {
            const g = (a*c+b)
            const i = (d*f+e)
            h = (g/c) + (i/f);
            if (c == f) {
                s = `(${a} ${b}/${c}) + (${d} ${e}/${f}) = ((${a} * ${c} + ${b})/${c}) + ((${d} * ${f} + ${e})/${f}) = ${g}/${c} + ${i}/${f} = ${g+i}/${c} = ${h} = ${h * 100}%`
            } else {
                s = `(${a} ${b}/${c}) + (${d} ${e}/${f}) = ((${a} * ${c} + ${b})/${c}) + ((${d} * ${f} + ${e})/${f}) = ${g}/${c} + ${i}/${f} = (${g} * ${f})/(${c} * ${f}) + (${i} * ${c})/(${c} * ${f}) = ${(g * f)}/${(c * f)} + ${(i * c)}/${(c * f)} = ${(g * f) + (i * c)}/${(c * f)} = ${h} = ${h * 100}%`;
            }            
        }

        if (manPcOP.value == '-') {
            const g = (a*c+b)
            const i = (d*f+e)
            h = (g/c) - (i/f);
            if (c == f) {
                s = `(${a} ${b}/${c}) - (${d} ${e}/${f}) = ((${a} * ${c} + ${b})/${c}) - ((${d} * ${f} + ${e})/${f}) = ${g}/${c} - ${i}/${f} = ${g-i}/${c} = ${h} = ${h * 100}%`
            } else {
                s = `(${a} ${b}/${c}) - (${d} ${e}/${f}) = ((${a} * ${c} + ${b})/${c}) - ((${d} * ${f} + ${e})/${f}) = ${g}/${c} - ${i}/${f} = (${g} * ${f})/(${c} * ${f}) - (${i} * ${c})/(${c} * ${f}) = ${(g * f)}/${(c * f)} - ${(i * c)}/${(c * f)} = ${(g * f) - (i * c)}/${(c * f)} = ${h} = ${h * 100}%`;
            }
        }

        if (manPcOP.value == '/') {
            const g = (a*c+b)
            const i = (d*f+e)
            h = (g*f)/(c*i);
            s = `(${a} ${b}/${c}) / (${d} ${e}/${f}) = ((${a} * ${c} + ${b})/${c}) / ((${d} * ${f} + ${e})/${f}) = (${g}/${c}) / (${i}/${f}) = ${g}/${c} * ${f}/${i} = ${g*f}/${c*i} = ${h} = ${h * 100}%`;
        }

        if (manPcOP.value == '*') {
            const g = (a*c+b)
            const i = (d*f+e)
            h = (g*i)/(c*f);
            s = `(${a} ${b}/${c}) * ${d} (${e}/${f}) = ((${a} * ${c} + ${b})/${c}) * ((${d} * ${f} + ${e})/${f}) = ${g}/${c} * ${i}/${f} = ${g*i}/${c*f} = ${h} = ${h * 100}%`
        }
    }

    manPcSt.textContent = s
    manPcRs.value = h

    h = 0;
    s = 'Kesalahan!';
}
