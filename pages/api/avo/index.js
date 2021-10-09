import DB from '../../../database/db'

const allAvos = async (req, res) => {
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    res.status(200).json({ length, data: allEntries })
}

export default allAvos