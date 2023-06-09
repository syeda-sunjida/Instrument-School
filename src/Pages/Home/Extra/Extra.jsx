
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle';

const Extra = () => {
    const instruments = [
        {
            name: 'Piano',
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYYGBgVGBIYEhkYGRgZGBoYGBgZGhgYGBgcIS4lHB4rHxgZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjEsJCQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDYxNDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAIDBAUBBwj/xABCEAACAQIDBQUFBgQEBQUAAAABAgADEQQSIQUGMUFRImFxgZETMqGx0RRCUmKSwQdysvAVQ4KiFiMzwuFTg5PS8f/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACsRAAICAQQCAQMDBQEAAAAAAAABAhEhAxIxQRNRYRQiMgRxgUJSkbHwI//aAAwDAQACEQMRAD8Aw0WOZZ1THziOuxwp9mV3XSaFuzKdQaQDFDCJepD7ZVJVAvAXBm1SblbauTgYXyDoNXxSgSlW2iogTV3gZtBOOarC+tvAw5FwFFTawlWvtnTjBLEPUW9w0xcXtJ9QLg98MYtgcqCPa+8AAOusDcRimdsxkTuWNybmNtOiMFEjKTZqYHF6i8KtnYxRAJTaaWD2jl4xJw9FIS9nof21CJQr4hbwbO1V5GRDHFjpI7Gim6zar1AZWZyAZXp0nOukjxGKsCrDX0jxQjMLGPdzLmEq9nyMz6rXJMnwjcpdrBJcixLyvmkuI4yCFcAk8k9OuRzlgYknnKEmonWBoMZF1VJjshkuGAlr2ekm2UozWBlVzrNOskzqqwxdgaO5ox2nIxhHSFZGYooo5MUUUUBhRRRTGD1UjxTj0Q9JL7M9JxbjsUGSin2ZSqLLrE5ZW9mx4KT4AmLaCosym0eVcfWJ0mjiKDA3KsPIyjUoXMaLQJRZrbvbPDEEiH+D2euW1oB7IxbUyARpDjAbWUgcI3LyJwiDaGyVsdIC7d2FxKjWerZg4mPtDBLreb8coHJ4pVw5U2OhkBhzt/ZSHUaQUxGDtzlozsVxKMU6yWiyygtM6BL2z1uZUpoSbDWEWztl2QueVpObSRSI6rXyzBx2KLEyfaWIIJWZZM0I9glLobJEaxjJ2VJIkrG8hkqxxpQXQWryQSWkNYjTMnw1KBvBoxyX8Kk0Vp6SHC05oqmkhJlUZuIp6TJrJN3FCY1cRoszRSMRWPIkqrK2LRWCRGnL1OlJDRjRdk2jLKGMmjWpWEoOIWAbFFFMA9uwu7dVuNl+M1MPugPvsT8JrYjblNOYmViN86S/eE877Fyz0P8A0lwjUw+7dFfug+Mups2mOCj0ge2/tLrOpv3RPExlKPoD09T2FlXZdJuKj0EyMdulRfgoB7tJHgt7KLmwces3MPjUb7w9Zk4yFanHkANobn1E9w3HQ/WYuSrQazqQOvL1nsosZSx2zkcEMo1jU1wJuT5AzZ+1BlveVdq7ZUA3Mn2tuk63agbfl5f+IEbVw1VD/wA1GAHMaj1mu8DbWsjcfji99bCYuJPfLFSulpnVcUJSMX0I2uyuRrLOCwodwL+MptUk2GxRRrjzlmnWBN0Qsw+zkRbjXxlLHbVyXUc+XhMyvtpyLKLX4zMqVCxuZKOm27YZai6HYisXYseciiil0iDdinbzkUJh6mTI8rCODRWh4yonLy1haolEG8lpEiK0UWQkwrAzRW1pg4bFACXFx46yLQyH41Zh4gTZrVMw0mNXhiBlW0nQSFTLCGUYpPSEljKQj2jxEkVsSdJltxmhijpM4x2KciiiigPaKm49Zz28T4hUP7tHUv4d0R771HPPUKPgL/GHgIizCcKjXB3PUkwQp7lYZf8AKDfzM5+Zlmnu5QX3aKD/AELCU2jCwmcfk29mMNkJyUDwAEY+w0/CPQTaZwJ1aixdsTbpGCuycmqMyH8rFflHCriU4PnHR1v/ALhYzZquo5yMrfhNVcMN3yilR25l0rU2XvXtL6aEfGWGpYfEAgFWPTg36TrHvSBGolJ9nqdRxHAjiD3Wmt95NS5WAc27uAjglOydeH0gLV3ExAYgFbcjYz19MRVTQ9te/j68fWO/xBOLLbxEZTcfxZnFS/JWeOruHXvqyjyMWI3HqqNHB8QR+89lTH0j0jKtSmfwwvWl7AtKHcTwuruviV+6D4H6yOnu7iGNslvEz2qqtM8h5SpUQLqq3g+pkvQ6/TQfs8c2jsWrRF3XTqNZmgT0be13dCq0jr5zz10ZDZgQRyM6NHUclk59fRUJKuDow7WvIiJpUq6lZTrjXSUUm3TElCKVxIIo60lQCM2Io2MQSbXofSaeBRZrZBaRlP4KxjQKu5kJc9YQYmgvdMd6GsaMkwSi+iXCYwjQ6x7vmF/GaWwsIt+0PUTcrbKot3eEjLVjGVUXhoOUbsCQsnQQmO76E6MZLT3ZB4EzeeIH+nmgeox7mEy7rG2hMhrbrVBwlI60PZKWhP0COKMz4U4rdmr/AGJDht1KjHWM9aHsC0JvoHLRQ+p7kmw4xRPqIj/SyPVftc59tEF6m1h1lWptgdZxb2dXiC58fIGxxMEjtoczJk3gReAuZtzD40gnUu/KR4vMq8dYK4ne1zomgmPiNsVHOrmEyj7CzCI+fNWqgKOC34zaTbFEaBr2nlzYljzJjldusytBcYy5PV02qh5y6ihhdTxnjwxrgjtHThDLYG2W0zXjJtck5aar7QsdGH3b/wB9Y0ojcbDub6yfD4xWGssGkrdJTbfBHc1yY2J2Ija2Kn8Sn59ZkYzYNUC6MHHS+Vvjp8YVPhSuqsR8vSRXe3aAPeNDElBdopHUkuGecYuvUpNZw6H8wIB8DwPlHUNuEcSD4w/q0MwI0YHiGAv5g6GDe0d18M5N0ak34qRy28UN19AIuxFlrX0Zb7UpkXYTz7efEo9TscuMNsX/AA9rP/0cUrA8A6Mh8yCflMTE/wAMceuq+yf+VyD/ALlEtowjF22R19bdHakBQMlTWa+L3Px1P38NUt1QB/6CZm19n1kF3pVEA4l0dR6kWnTafZxpNEb0ukjK2kiVOssrSzTXXIasprccLyda7/jb1M5VpFeINvCMBg5GLCuTxJl3CUgTczNV5YpVyIrQUwu2dXRVtpJKlRCb3EC2quTp+8uUS9tR85GWlebOrS1lFU0FH2tF5zn+LKOF5Y3R2VTqkmoL93nDOnuzQA7KrJLTKS10gNw23rHW80F3iE0Nr7qowJXQ9RPP9q4arQNmFxytD4rF88ewtfb6nl8JC23AOGkD6GJc/d9ZJisRk4wePNDrUTVoKv8AiOdgL9qHWKP4RfIjYOKPWRmvKuedDQbUDcTmqZzOZAGuQBck8ABcnuAm5s7duo9jUIpr04uR4cB5+kNJAsyjUkZrjrPQcFsfDUxYIrnmz2dj66DyAl9Epr7qILcLKo+Qi2jWzy6jibnTgOfXwkzYgnT1hdtXdig+ZkJpu1z2dUv3oeHkRBqpu5iEuAFcdVbU+TWjfazJsbgipdS3C4v4XhdTxdM8LD+9B8YCEsjZWFiOIPGWaVeJKNjJnomGx4GgPTnNrAbQa9rzy6jiCODTZwG3SujcucCbRpQUj09q1xpofhKWLov7w8x9INYXeIXsGl4baqL2hZhzW/yvGc0+SS0pR4JzWY6ZgD3y9RZrWbK47+PrM37XQxFi2ak3MqRY+IIIlh8NVy/8ipTqAcA4Kt6i4PwmXxkLXTx/3svikh4Fl8GP7xtSg4HYfwzD9x9INYnGY1L5qDD+UB/6SZTXexxoVHfNvS5Qy0ZPKaYR1cZiU4pmA45SG+BsZTTbftAVyA8mAsCOoZW+UzH3oDCxupOl+IkGP2Saq+1pNeoB2gDo4HDXkwiOTfDHWml+Soobd/h8lUe0wzCnUNy1M/8ATY/lPFPiO4QAxmCxGFfJWpsh5Zh2W71YaN5GHuC2xWQ6kmxsVN7i3EawiTaVLEoadZFdW4qwuPHuPfKx16xIlqfpnyjyenjEcWIFz1lbFYMrqtiPOGO3twGW74Riw4+zY9rwR/veB174KUsY6Eo4IINmB0IPQgi4MvFp5iczTjhmaH7p0VJs19mh1zI3a6cZj1KbKbMCD3iOpJgaaLeFxNjwE0ftN+SzGpuw6+k08NXc2Fj6CJKIyeC3htovTN0bLfoZq4bfasgs1m7+BmU2GqEcT+iU62Hcc/8AbEpMNh/s7fIOpLDxE5j6jVlDIlwZ57kcDiR4C03N3943pOqvqnM84HH0MmixjqTqdKTX7hBvavtD7yMAO4z1XD7fw1R8gK3I7pZxOBpupyhTfoBBH7XYzm2qPEFwrnXKdYp6r/w73CdjeaXoPij/AHHn9IM5yopY9AL/AP5NnCbAc61Wyj8K6t5ngPjNuiioLIoUdALRzVJBzfRZR9jcNSSkLIgXqeLHxY6yRsUesgZ5EXi8jFwYox32oyhniLwUYuPjGjUxhlB6k7TqQ0YobxUswzWg5Sqt91jpyv8AWGOKTMpEDa9DJUseBnRpU1Rz6jcXaLNPGsDr9PlNGlir6zLXD2JQ8CLr3GV1qsjWhlBPgaGp7C7DC9iATf8ADr8pfOHqfhceKOP2gjgtpZWuTpPQ9295WVcr+0dB7hCMxH5T1Eg4U8lZTpXHJkpiHBtfXoeMu4bHsDrde8XtCg7coOLOjsOj0WI+IlaoMC3AOh/Kj29GBEzgumKtf2mO2dtRl99s3if2mi+NoVdHpo1/xAE+pmMEww/zh/qpOPU3lPau0MNQTOG9ob2yorBvHWZblgDcG7ybzbCwbfdy36MbfOSYbYVOmbpVfL0sH+QvAY734ZQpdaqFuA7JIHVrNoJdp7w0iwAaoOh0A7tc3CF4y0FXLCkwh2vsjDVe2apRh7z5bAj81+PzgGNoUvaNTV+0rMozAoWsdCAeosfOEuJx2a2YFk0vdrzD3s2amJT2tLs1aY8M6Ae61vvC1wfKKnGbp4KVOEbWTVwG13QgPqonNq7Aw+PBcMadZQArgAhhr766ZgOoIInn2zdvVadgzJUTozDNbub6wt2ZvDQYC7Kt+KsQpB6q19D4GM4T03Ym/S1lXDBfamx8TgnAdAVJ7DrqjeB5HuMpVKxqHVDc8+UM97N40OHehTZaxqWHaytkAIN7jQtppbxnn6lx9w+V/wBp0we6NtHFqJRlSZZxNF6RswvpxHCNTHt0+ESYsjihPiWt6R9PBvUV6iIQtOxcA9eYHSNwsi8vA9cd+VvIGO+1D8D38GlJMVbjn8mH0ky7RXnn7+0PpNt+Dbvk7Ur3+4/oZWd/yn0MnbHoeT/qEgfFKeTfqjJP0C17ElZlN1DAjgRe8INk73YiiuXKX14sTe0GzV8fWdFfx9ZnG+jbvk9hwG89J6asxsSNQTwinnWG2pQCKCguAL6g6xSNS9MrS9oK/aRpeRhG6GO9g3Sc1HVY1njC8eaDdIxqDdITWcDzpacFBukcKDTBsgdo2k8mfCtK/sGBmAy1mmTtnChhmHETXTCuRcR1TAsUOnCNF0xJZQJo+ZAfvIZtbM2ZTxKuh7LgZ6TD5HrrMWspp1L8m0PjNDAYhqbB14ob6c15j0l5J1aIxklLPBjV9nVFLAoTkvmIFx4w02RvTUp0VzKnYAXM6NqBwJIPGM2pUCOMQmtOsO2OXaGnxlVtFRSodSUuCNCraN6Xk3PclZXak6CCl/EA81onwLiXKX8Qk+8if6an1Eyqe41V1V0pB1YBkIanqD4kayKpuTWXjhn8lRv6WmyvYtQfr/IUUt/MMfeQjwZD+4lpN7sGeJI8VB+RMBm3ay+9Rdf56DgeovI12XQXRlon+Y10PrYATWzbI9BPtjH7JCM/s6LuQQuZOZvqbieeV8RmoPWqAqGJTCovZJA5n8q/vbpCRdiYZ9DQDfyYyl/Se1IsfuvTbIGXH5UXKgRadZUW98oyLf1jJp1YrTje3/YPbt7wmi2SqS1NjxOpQ9f5eo8xDoUtVemcykgkD++kCKm6ze3y5K6URq1WtTamAoAJ4rbNytcyajtaqx9lgUYKhIDZmYlLgICDoPiTeDV01J3H+R9HWlBVPK6L+++7qKpxOG0TjWpgaLf76Dkuuo5ceEB857vQfSFbbZxyFlbISbq6tkPHQghplrs9rZjhQRyPtSB/XKwk0qlRHUgpO42ZAf8AKp8vpHiqPwL5Fh+8s16a8qDKednLD4g/OQFF/A4/vwlLTINNCXEW4AjwdhJVxlvvVB4OD8xK5C/m+E4AvU+k1I1sv/aqJU58+fTK+VCRblbMARfqI969RCBUYoGAZD7GmSVOqm2nEWPGUFy/i+EKNn7ZoNQFDFItRU0pOGVHQcwCxFxEljhWUjT5dGI2LXnWc/8AsUx/3yI4of8AqP8A/Gg/7pJicBTDHJVBX7uZqZfzCOflKYw97kMlh1ZU9A5BjpIRtjmqr+N/0L9Zw4gj3WPmqxhonqv60/8AtOGmeq/qX6w0gWyT7Y/4vgPpFG/Zz+JP1p9YpsAyet5liaqsBG3jMY28TTj8Uju8qDz2qyN6qwGXeBpG+32M3hkDyoOxWWNNdYCDbrTjbbaHwyN5UHTYhe6Va1dYHHbTSJtrsZvDI3mR6FhMUpFtJao11vbSeZpthxwmjhttE631HGZ6TQFqJmhvJs7tMBz7S+PKZuyqmYC/H3T3MOF5dq7RNTndgLj6TNICVbjRKw07n6esrBWtrIzw7QQYQq+GrUG4orVaXXKPfXxXjbxlLZdfNTakxvUpsns7a5gxFwPKxEhTFspWoPfQ3YdbaOp7mU/EzJY+yqHKTlWxQ8/Zt2kPiAfUHpFUOSm/CPYtwtrZVWi57NTO1E9GU2ZPPj43hyR4zynAXfDI66OMzAjk2ckMPG3znoWwdpivSDH317NQDkw4/XzhhLonqR7Rp+sjekG95b+IB+c6fOcJ8ZQmVauzKDe9RQ+KJ9JSfdrCn/IQfygr/SRNe/jOE+MWkFSa7POd7908S4ZMN7JKJAvmqODYXzXzZreRtYTzraGJFCkuHpN2iQ9Z1OpbkARyn0Hi8OlRGRxmVxZgekEdp7l7Npo1SpTIABJJd7n4wUl+3I+5tfPH8Hj+zNiVK/aBABJ7TniefjKlbCBWK51upIOvSa20cQKrijSBSkhNhfgL6XPMy9TbAJSqI1NnrWtTIB42014DXrCpvszhjAMezPJh+qKz/i/3SSvQZDZ6ZW/W4kJt+Eylk6O3fqfWcJfvjdOhnNO+EA7O39gTq1PyqfEfSMv3mLN3mY1lhMUosfZrcEEEFhqOHMyVQ2IqhQozuxsS1rnjYk6SotQjnLSZ2GYFLix6HygeAxfsir0sjFHRg6khgTbn0tISy/hP6v8AxJ8RWdzd2DHqTc+s5iKaC2Rs11Ga9tG5gW5TJ+wNZxwQXHT4xRt4oworxRRQmFFFFMYUUUUxhRRRTGOx1NyD84yKANk61mR8wOosfHumtVXOpUH3wHpnow1t/fSYzC6g9NDL+BqEpYe9TOZf5TqfIG/6hEa79FE817LC4i9m/GBcfmGh/vvkq0wynQFkv5oxuR5Mb/6mkdSkNWHBu0B0P3h+87Rcoyv73UHgwOjKfFSR5xJO8opBU/uPQtgoooIiX7CjQ8ShBI/ceKmaGy8b9mrhvuVLK/c1+yYNbKxeQ3BLBLEfmpvzPeND45oR42gHTuYCx+kjF5secawegqwIBHONt3zB3V2rnU021ZDl8RbQwjJ7pdOzmaohInJIWHScFoTERMq47BpWXJUUOvQi/CXHsJGX6RTHlm+mwmDhMJhctgczrlF+6BFJGw12cWccjyM+hcQCykDiRoZ51tH+Hj1nZ3qsSxJ4Dygrroon2eZ4/adSswzW0vYAdesr1KbqAWDAHgSIXba3YXBWcvn1tZrX8rTCxGNeuMiJbXj9I6kuEsCuLrLyZBYzmaWsVhHT3ra9JWvHTTEdnM05OxQgFFORQgHuRyEZFFAEk9oPwxSOKakG2KKEZ3fN49dgSXniV8EgZihSN344bviDzwN4JApaK0LRu+I4bviD6iIfp5AkEJ4CONFvwmHWF2Co5SxW2Np7sH1CD9OeckRyISbATa2ts3IeFp3ZWCsyseBOvnKeVbbE8L3UZ+Hwr3IKmzC1+/kZNgsK9NwzLZdQ/cp0J8tD5T0ijsNSOGhEVDZodO0oJUslQd6/VSD5zneu/RZaK9nnrtlLIeRMdhmvdfMSxt7BGm+vIlCe9QMp80Kn1mdRexB6SkcqwyVmzs/FFCOi3/SeI9bw32NiQy5CeHap/wAp5QAUgMDybQ+c2NjYsqct+0huv8p4jyiSjTAnuX7Bbh6xo1Q44E2aegYLGB1BuJ59VIdMw5jXxmlu5jyOwx1X5cjHi6JSVhmzjqJGzSMG4vOGOTOmNjTGkwGJLyPEscpy8bTl5wEwBPL95N2cTiHZ3eyj3Rbl68YHVVOGJXTMJ7ttWi7oQvEgzz2vuE7sWd2JJuTAsYfA999nnOLxjPa+ncIz2D2vlNoZbX3PXDqXDE5eIMwcTj0sAOXKUUuooRx7bMackhpnjaRyiEYooooQCiiimMKKKKYx7GcCCZMuzxORTyEeox/+HCL/AA4TsUxjn2ATowAiimNZLTwdo/E07LFFCbsB9v07nWNweGukUUe/tQv9Qe7BqZqSHmND5TgTLXZeVZC3+qnx9Qf9oiimQHyCu9GDzZxzNPOv81O9/VWP6RBXa+yzSCVB7tRVYdxPERRSmlJ4Gawyth6txlMtYTElWVuY0PfyMUU6J/ic0PyC7ZON1KHgeEtVKppuGXlx7xOxSaBLkM9lY7Mo7xNMtFFHjwSlyRs0YWnYpjDc0WacimCdDTtWpYG0UUxjzXfIYmuTSQC33jmAuOk89rYJqT2cDyN4ooINjtIWJxA5SmKZteKKWWCT5GRRRRxBRRRTGFFFFMY//9k=',
            description: 'The piano is a versatile musical instrument with a keyboard that produces sound by striking strings with hammers.',
        },
        {
            name: 'Guitar',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGdpcEg6I9yDiWpSb5KvP5yTZYg3nsrGyMA&usqp=CAU',
            description: 'The guitar is a popular string instrument that typically has six strings and is played by plucking or strumming the strings.',
        },
        {
            name: 'Violin',
            image: 'data:image/jpeg;base64,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',
            description: 'The violin is a bowed string instrument known for its beautiful sound and is commonly used in classical music.',
        },
        {
            name: 'Flute',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52BvMxcdEixj49_ks8UJLxDavCVog57HkLQ&usqp=CAU',
            description: 'The flute is a wind instrument that produces sound by blowing air across a hole. It is commonly used in orchestras and ensembles.',
        },
        {
            name: 'Drums',
            image: 'data:image/jpeg;base64,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',
            description: 'Drums are a percussion instrument played by striking or hitting with hands, sticks, or mallets. They provide rhythm and beat to music.',
        },
        {
            name: 'Saxophone',
            image: 'data:image/jpeg;base64,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',
            description: 'The saxophone is a versatile woodwind instrument known for its smooth and expressive sound. It is commonly used in jazz and popular music.',
        },
    ];

    return (
        <section>
             <SectionTitle
                heading="Explore Instrument"
            ></SectionTitle> 
            <div className="grid grid-cols-2 gap-4">
                {instruments.map((instrument, index) => (
                    <motion.div
                        key={index}
                        className="p-4 bg-white rounded shadow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={instrument.image} alt={instrument.name} className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{instrument.name}</h3>
                        <p>{instrument.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Extra;