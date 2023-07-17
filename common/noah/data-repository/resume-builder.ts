import { DEMOGRAPHIC_SERVEY } from '../constants'
import { ResumeEntity } from './resume-entity'

export class ResumeBuilder {
    private _fullName: string
    private _cv: string
    private _email: string
    private _phone: string | undefined
    private _currentCompany: string | undefined
    private _linkedInUrl: string | undefined
    private _twitterUrl: string | undefined
    private _gitHubUrl: string | undefined
    private _websiteUrl: string | undefined
    private _portfolioUrl: string | undefined
    private _noahSavingsUrl: string | undefined
    private _additionalInfo: string | undefined
    private _demographicSurvey: DEMOGRAPHIC_SERVEY | undefined


    setFullName(value: string) {
        this._fullName = value
        return this
    }

    setCv(value: string) {
        this._cv = value
        return this

    }

    setEmail(value: string) {
        this._email = value
        return this

    }

    setPhone(value: string | undefined) {
        this._phone = value
        return this
    }

    setCurrentCompany(value: string | undefined) {
        this._currentCompany = value
    }

    setLinkedInUrl(value: string | undefined) {
        this._linkedInUrl = value
    }

    setTwitterUrl(value: string | undefined) {
        this._twitterUrl = value
    }

    setGitHubUrl(value: string | undefined) {
        this._gitHubUrl = value
    }

    setWebsiteUrl(value: string | undefined) {
        this._websiteUrl = value
    }

    setPortfolioUrl(value: string | undefined) {
        this._portfolioUrl = value
    }

    setNoahSavingsUrl(value: string | undefined) {
        this._noahSavingsUrl = value
    }

    setAdditionalInfo(value: string | undefined) {
        this._additionalInfo = value
    }

    setDemographicSurvey(value: DEMOGRAPHIC_SERVEY | undefined) {
        this._demographicSurvey = value
    }

    build() {
        if (!this._cv) {
            throw Error('CV value is missing')
        }
        if (!this._email) {
            throw Error('Email value is missing')
        }
        if (!this._fullName) {
            throw Error('FullName value is missing')
        }
        return new ResumeEntity(
            this._fullName,
            this._cv,
            this._email,
            this._phone,
            this._currentCompany,
            this._linkedInUrl,
            this._twitterUrl,
            this._gitHubUrl,
            this._websiteUrl,
            this._portfolioUrl,
            this._noahSavingsUrl,
            this._additionalInfo,
            this._demographicSurvey
        )
    }
}
