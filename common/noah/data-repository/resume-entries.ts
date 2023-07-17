import { ResumeBuilder } from './resume-builder'
import { utils } from '../utils'
import { FILENAMES } from '../constants'

export class ResumeEntries {
    async getResumeOnlyWithRequiredFields() {
        return new ResumeBuilder()
            .setFullName(utils.generateRandomString(12))
            .setCv(FILENAMES.RESUME)
            .setEmail(utils.generateRandomEmail())
            .build()
    }
}
