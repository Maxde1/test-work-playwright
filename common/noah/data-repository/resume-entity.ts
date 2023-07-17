import { DEMOGRAPHIC_SERVEY } from '../constants'

export class ResumeEntity {

    constructor(
        private _fullName: string,
        private _cv: string,
        private _email: string,
        private _phone: string | undefined,
        private _currentCompany: string | undefined,
        private _linkedInUrl: string | undefined,
        private _twitterUrl: string | undefined,
        private _gitHubUrl: string | undefined,
        private _websiteUrl: string | undefined,
        private _portfolioUrl: string | undefined,
        private _noahSavingsUrl: string | undefined,
        private _additionalInfo: string | undefined,
        private _demographicSurvey: DEMOGRAPHIC_SERVEY | undefined
    ) {
        this._fullName = _fullName
        this._cv = _cv
        this._email = _email
        this._phone = _phone
        this._currentCompany = _currentCompany
        this._linkedInUrl = _linkedInUrl
        this._twitterUrl = _twitterUrl
        this._gitHubUrl = _gitHubUrl
        this._websiteUrl = _websiteUrl
        this._portfolioUrl = _portfolioUrl
        this._noahSavingsUrl = _noahSavingsUrl
        this._demographicSurvey = _demographicSurvey
    }


    get fullName(): string {
        return this._fullName
    }

    set fullName(value: string) {
        this._fullName = value
    }

    get cv(): string {
        return this._cv
    }

    set cv(value: string) {
        this._cv = value
    }

    get email(): string {
        return this._email
    }

    set email(value: string) {
        this._email = value
    }

    get phone(): string | undefined {
        return this._phone
    }

    set phone(value: string | undefined) {
        this._phone = value
    }

    get currentCompany(): string | undefined {
        return this._currentCompany
    }

    set currentCompany(value: string | undefined) {
        this._currentCompany = value
    }

    get linkedInUrl(): string | undefined {
        return this._linkedInUrl
    }

    set linkedInUrl(value: string | undefined) {
        this._linkedInUrl = value
    }

    get twitterUrl(): string | undefined {
        return this._twitterUrl
    }

    set twitterUrl(value: string | undefined) {
        this._twitterUrl = value
    }

    get gitHubUrl(): string | undefined {
        return this._gitHubUrl
    }

    set gitHubUrl(value: string | undefined) {
        this._gitHubUrl = value
    }

    get websiteUrl(): string | undefined {
        return this._websiteUrl
    }

    set websiteUrl(value: string | undefined) {
        this._websiteUrl = value
    }

    get portfolioUrl(): string | undefined {
        return this._portfolioUrl
    }

    set portfolioUrl(value: string | undefined) {
        this._portfolioUrl = value
    }

    get noahSavingsUrl(): string | undefined {
        return this._noahSavingsUrl
    }

    set noahSavingsUrl(value: string | undefined) {
        this._noahSavingsUrl = value
    }

    get additionalInfo(): string | undefined {
        return this._additionalInfo
    }

    set additionalInfo(value: string | undefined) {
        this._additionalInfo = value
    }

    get demographicSurvey(): DEMOGRAPHIC_SERVEY | undefined {
        return this._demographicSurvey
    }

    set demographicSurvey(value: DEMOGRAPHIC_SERVEY | undefined) {
        this._demographicSurvey = value
    }
}
