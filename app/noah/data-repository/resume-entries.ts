import { ResumeBuilder } from './resume-builder'
import { utils } from '../common/utils'
import { FILENAMES } from '../common/constants'

export class ResumeEntries {

    async getResumeOnlyWithRequiredValidFields() {
        return new ResumeBuilder()
            .setFullName(utils.generateRandomString(12))
            .setCv(FILENAMES.RESUME)
            .setEmail(utils.generateRandomEmail())
            .build()
    }

    async getResumeOnlyWithRequiredInvalidFields() {
        return new ResumeBuilder()
            .setFullName(utils.generateBigNumber(12).toString())
            .setCv(FILENAMES.RESUME)
            .setEmail(utils.generateBigNumber(12).toString())
            .build()
    }
}

export const resumeEntries = new ResumeEntries()
