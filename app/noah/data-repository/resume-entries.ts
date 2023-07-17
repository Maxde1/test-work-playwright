import { ResumeBuilder } from './resume-builder'
import { utils } from '../common/utils'
import { FILENAMES } from '../common/constants'

export class ResumeEntries {

    async getResumeOnlyWithRequiredFields() {
        return new ResumeBuilder()
            .setFullName(utils.generateRandomString(12))
            .setCv(FILENAMES.RESUME)
            .setEmail(utils.generateRandomEmail())
            .build()
    }
}

export const resumeEntries = new ResumeEntries()
