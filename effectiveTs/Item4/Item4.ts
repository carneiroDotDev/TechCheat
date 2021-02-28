// Item 4: Confortable with structured Types

interface verctor2D {
    x: number
    y: number
}

function calculatedLength(v: verctor2D) {
    return Math.sqrt(v.x * v.y + v.y * v.y)
}

interface NamedVector extends verctor2D {
    name: string
}

const v: NamedVector = { name: 'Boo', x: 3, y: 4 }
calculatedLength(v) // TS allows calculatedLength to be called with a NamedVector
// because its structur is compativle with vector2D.

// But of course this can become a problem:

interface Vector3D {
    x: number
    y: number
    z: number
}

function normalize(v: Vector3D) {
    const length = calculatedLength(v) // Z will be simply ignored, and TS allows that.
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length,
    }
}

let foo: any
foo = '1' as any

console.log(foo)

export {}
